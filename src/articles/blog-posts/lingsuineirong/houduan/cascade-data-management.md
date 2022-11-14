---
title: 级联数据管理
date: 2022-06-10
category:
tag: 
isOriginal: true
timeline: true
---
::: tip ✨✨✨✨✨
工作中经常会遇到级联数据的管理，例如行政区划，在拉取级联树的时候不方便，在这里记录一种操作级联数据的方法，生成一个代码链，用与管理级联数据之间的关系
:::

<!-- more -->

## 说明

以行政区划为例，为每一级行政机构分配一个四位数的代码，例如：浙江省-0001，杭州市-00010001，宁波市-00010002，西湖区-000100010001，以此类推，暂且将这种代码的组合称为 代码链。

1. 初始化，若在设计表的时候没有引入 `代码链`字段，后期增加该字段的时候需要对数据进行批量赋值
2. 修改时，若修改父子层级关系，需要将被修改的行政区划及其所有子级的行政区划的代码链进行修改
3. 新增时，为新增的行政区划分配一个新的代码链，通常为同级代码链+1

## 1. 初始化

```cs
/// <summary>
/// 行政区划代码链初始化
/// </summary>
/// <param name="biaoZhunDM"></param>
/// <returns></returns>
public async Task<string> XingZhengQHDMLInit(string biaoZhunDM)
{
    //将所有数据放入缓存，方便递归
    var allList = await _xingZhengQHBMRepository
    .AsNoTracking()
    .Select(x => new GY_ZD_XingZhengQHBMModel
    {
        Id = x.Id,
        BiaoZhunDM = x.BiaoZhunDM,
        FuJiDM = x.FuJiDM,
        DaiMaLian = x.DaiMaLian
    }).ToListAsync();
    //查询当前标准代码对应的数据
    var entity = allList.FirstOrDefault(x => x.BiaoZhunDM == biaoZhunDM);
    //递归更新子集代码链
    //批量更新错误信息
    var errMsgList = new List<string>();
    await UpdateDaiMaLianByRecursion(allList,new List<GY_ZD_XingZhengQHBMModel> { entity }, errMsgList);
    return string.Join('|', errMsgList);
}
/// <summary>
/// 递归更新代码链
/// </summary>
/// <param name="allList">所有行政区划列表</param>
/// <param name="fuJiEntityList">父级行政区划列表</param>
/// <returns></returns>
public async Task UpdateDaiMaLianByRecursion(List<GY_ZD_XingZhengQHBMModel> allList, List<GY_ZD_XingZhengQHBMModel> fuJiEntityList, List<string> errMsgList)
{
    //根据传入的父级行政区划查找所有子级行政区划
    var childList = allList
        .GroupJoin(fuJiEntityList, all => all.FuJiDM, fuJi => fuJi.BiaoZhunDM, (all, fuJi) => new { all, fuJi })
        .SelectMany(x => x.fuJi.DefaultIfEmpty(), (all, fuJi) => new { all.all, fuJi })
        .Where(x => x.fuJi != null)
        .Select(x => x.all)
        .ToList();
    if (!childList.Any()) return ;
    //按照父级代码分组
    var groupList = childList.GroupBy(x => x.FuJiDM).Select(x=>x.Key).ToList();
    //批量更新子集代码链
    foreach (var item in groupList)
    {
        var fuJiEntity = fuJiEntityList.FirstOrDefault(x => x.BiaoZhunDM == item);
        var list = childList.Where(x => x.FuJiDM == item).ToList();
        for (int i = 0; i < list.Count; i++)
        {
            var child = list[i];
            child.DaiMaLian = fuJiEntity.DaiMaLian + (i + 1).ToString().PadLeft(4, '0');
        }
        
    }
    try
    {
        await _xingZhengQHBMRepository.BatchUpdateAsync(childList, x => new { x.DaiMaLian }, y => y.Id);
    }
    catch (Exception ex)
    {
        errMsgList.Add("部分批量更新失败，失败层级父级ID：[" + string.Join(',', fuJiEntityList.Select(x => x.Id).ToList()) + "]" + ",失败原因：" + ex.Message);
    }
    //从数据集中排除已更新的
    allList = allList
        .GroupJoin(childList, all => all.Id, child => child.Id, (all, child) => new { all, child })
        .SelectMany(x => x.child.DefaultIfEmpty(), (all, child) => new { all.all, child })
        .Where(x => x.child == null)
        .Select(x => x.all)
        .ToList();
    await UpdateDaiMaLianByRecursion(allList, childList, errMsgList);
}
```

## 2. 新增

```cs
/// <summary>
/// 新增行政区划
/// </summary>
/// <param name="createDto"></param>
/// <returns></returns>
public async Task<string> AddXingZengQH(GY_ZD_XingZhengQHBMCreateDto createDto)
{
    var count = await _xingZhengQHBMRepository.CountAsync(entity => entity.DaiMaLB == createDto.DaiMaLB && entity.BiaoZhunDM == createDto.BiaoZhunDM);
    if (count > 0)
    {
        throw new TongYongYWException($"行政区划已存在！");
    }
    var entity = createDto.MapTo<GY_ZD_XingZhengQHBMCreateDto, GY_ZD_XingZhengQHBMModel>();
    #region 代码链赋值
    //两种情况
    //1.新增的行政区划是父级下面的第一个子级，这时代码链需要在父级基础上增加四位
    //2.新增的行政区划不是父级下面的第一个子级，这时代码链需要取子级最大的代码链
    //当出现第一种情况时，获取的代码链是父级代码链后追加四个0，这是为了下面生成最新的代码链，并且不会影响取最大值
    var daiMaLian = await _xingZhengQHBMRepository
            .AsNoTracking()
            .Where( x => x.FuJiDM == createDto.FuJiDM || x.BiaoZhunDM == createDto.FuJiDM)
            .Select(x => new
            {
                DaiMaLian = x.FuJiDM == createDto.FuJiDM ? x.DaiMaLian :  x.DaiMaLian + "0000"
            })
            .Select(x=>x.DaiMaLian)
            .MaxAsync();
    entity.DaiMaLian = daiMaLian.Substring(0, daiMaLian.Length - 4) + (Convert.ToInt32(daiMaLian.Substring(daiMaLian.Length - 4, 4)) + 1).ToString().PadLeft(4,'0');
    #endregion
    entity.DaiMaID = $"{entity.DaiMaLB}{entity.BiaoZhunDM}";
    var result = await _xingZhengQHBMRepository.InsertAsync(entity);
    await _unitOfWork.SaveChangesAsync();
    return result.Id;
}
```

## 3. 修改

```cs
/// <summary>
/// 修改行政区划
/// </summary>
/// <param name="id"></param>
/// <param name="updateDto"></param>
/// <returns></returns>
public async Task<string> UpdateXingZengQH(string id, GY_ZD_XingZhengQHBMUpdateDto updateDto)
{
    await _unitOfWork.BeginTransactionAsync();
    try
    {
        var entity = await _xingZhengQHBMRepository.GetAsync(id);
        if (entity == null)
        {
            throw new WeiZhaoDSException($"行政区划不存在！");
        }
        var count = await _xingZhengQHBMRepository.CountAsync(entity => entity.Id != id && entity.DaiMaLB == updateDto.DaiMaLB && entity.BiaoZhunDM == updateDto.BiaoZhunDM);
        if (count > 0)
        {
            throw new TongYongYWException($"行政区划已存在！");
        }
        #region 代码链更新
        //层级是否修改
        if (entity.FuJiDM != updateDto.FuJiDM)
        {
            //查询原代码链
            var oldDaiMaLian = await _xingZhengQHBMRepository.AsNoTracking().Where(x => x.Id == id).Select(x => x.DaiMaLian).FirstOrDefaultAsync();
            //查询新层级下的最大代码链 此处逻辑参考新增
            var newDaiMaLian = await _xingZhengQHBMRepository
            .AsNoTracking()
            .Where(x => x.FuJiDM == updateDto.FuJiDM || x.BiaoZhunDM == updateDto.FuJiDM)
            .Select(x => new
            {
                DaiMaLian = x.FuJiDM == updateDto.FuJiDM ? x.DaiMaLian : x.DaiMaLian + "0000"
            })
            .Select(x => x.DaiMaLian)
            .MaxAsync();
            //更新代码链
            entity.DaiMaLian = newDaiMaLian.Substring(0, newDaiMaLian.Length - 4) + (Convert.ToInt32(newDaiMaLian.Substring(newDaiMaLian.Length - 4, 4)) + 1).ToString().PadLeft(4,'0');
            //查询所有需要更新代码链的子级
            var childList = await _xingZhengQHBMRepository 
                .AsNoTracking()
                .Where(x => x.DaiMaLian.StartsWith(oldDaiMaLian))
                .Where(x => x.DaiMaLian != oldDaiMaLian)
                .Select(x => new GY_ZD_XingZhengQHBMModel
                {
                    Id = x.Id,
                    DaiMaLian = entity.DaiMaLian + x.DaiMaLian.Substring(oldDaiMaLian.Length, x.DaiMaLian.Length - oldDaiMaLian.Length)//更新后的代码链
                }).ToListAsync();
            //批量更新子集代码链
            await _xingZhengQHBMRepository.BatchUpdateAsync(childList, x => new { x.DaiMaLian }, y => y.Id);
        }
        #endregion
        entity.Merge(updateDto);
        entity.DaiMaID = $"{entity.DaiMaLB}{entity.BiaoZhunDM}";
        await _xingZhengQHBMRepository.UpdateAsync(entity);
        await _unitOfWork.SaveChangesAsync();
        await _unitOfWork.CommitTransactionAsync();
        return id;
    }
    catch (Exception ex)
    {
        await _unitOfWork.RollbackTransactionAsync();
        throw new TongYongYWException(ex.Message);
    }
}
```
