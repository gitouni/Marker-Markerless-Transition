// 最外层容器
#root {
    width: 600px;
    height: 24rem;
    position: relative;
    overflow: hidden;
    user-select: none;
    margin: 100px auto;
}

// 不用动的底图
#root .changed-img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    object-fit: cover;
    object-position: center center;
}

// 需要根据鼠标事件改高度的图
#root #clip {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    will-change: clip;
    user-select: none;
    clip: rect(auto, auto, 206px, auto);
}

#root #clip .origin-img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    object-fit: cover;
    object-position: center center;
}

// https://juejin.cn/post/7216613455192375356
