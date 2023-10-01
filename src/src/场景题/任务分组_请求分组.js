// 1、任务分组
Promise.allSettled(promiseList).then((results = []) => {
    const renderOnce = 2; // 每组渲染的结果 tab 数量
    const loop = (idx) => {
        if (promiseList.length <= idx) return;
        results.slice(idx, idx + renderOnce).forEach((item, idx) => {
            if (item.status === 'fulfilled') {
                handleResultData(item?.value || {}, sqlIdList[idx]?.sqlId);
            } else {
                console.error(
                    'selectExecResultDataList Promise.allSettled rejected',
                    item.reason
                );
            }
        });
        setTimeout(() => {
            loop(idx + renderOnce);
        }, 100);
    };
    loop(0);
});


// 2、请求分组 + 任务分组
const requestOnce = 6; // 每组请求的数量
// 将一维数组转换成二维数组
const sqlIdList2D = convertTo2DArray(sqlIdList, requestOnce);
const idx2D = 0; // sqlIdList2D 的索引

const requestLoop = (index) => {
    if (!sqlIdList2D[index]) return;
    const promiseList = sqlIdList2D[index].map((item) =>
        selectExecResultData(item?.sqlId)
    );
    Promise.allSettled(promiseList)
        .then((results = []) => {
            const renderOnce = 2; // 每组渲染的结果 tab 数量

            const loop = (idx) => {
                if (promiseList.length <= idx) return;
                results.slice(idx, idx + renderOnce).forEach((item, idx) => {
                    if (item.status === 'fulfilled') {
                        handleResultData(item?.value || {}, sqlIdList[idx]?.sqlId);
                    } else {
                        console.error(
                            'selectExecResultDataList Promise.allSettled rejected',
                            item.reason
                        );
                    }
                });
                setTimeout(() => {
                    loop(idx + renderOnce);
                }, 100);
            };
            loop(0);
        })
        .finally(() => {
            requestLoop(index + 1);
        });
};
requestLoop(idx2D);

// 3,请求分组
function methods3() {   
    const requestOnce = 3; // 每组请求的数量
    // 将一维数组转换成二维数组
    const sqlIdList2D = convertTo2DArray(sqlIdList, requestOnce);
    const idx2D = 0; // sqlIdList2D 的索引

    const requestLoop = (index) => {
        if (!sqlIdList2D[index]) return;
        const promiseList = sqlIdList2D[index].map((item) =>
            selectExecResultData(item?.sqlId)
        );
        Promise.allSettled(promiseList)
            .then((results = []) => {
                results.forEach((item, idx) => {
                    if (item.status === 'fulfilled') {
                        handleResultData(item?.value || {}, sqlIdList[idx]?.sqlId);
                    } else {
                        console.error(
                            'selectExecResultDataList Promise.allSettled rejected',
                            item.reason
                        );
                    }
                });
            })
            .finally(() => {
                requestLoop(index + 1);
            });
    };
    requestLoop(idx2D);
}

