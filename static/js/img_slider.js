<script>
  let allow = false;
   
  // 滑动
  const move = (clientY) => {
    $("#bar").css("transform", `translate3d(0px, ${clientY - 100}px, 0px)`);
    $("#clip").css("clip", `rect(auto, auto, ${clientY - 100}px, auto)`);
    $("#root").css("cursor", `ns-resize`);
  };
  
  // 停止
  const stop = () => {
    allow = false;
    $("#root").css("cursor", "unset");
  };
  
  // 鼠标事件
  $("#root").on({
    mousedown: function(e) {
      allow = true;
      move(e.clientY);
    },
    mousemove: function(e) {
      if (allow) {
        move(e.clientY);
      }
    },
    mouseup: function(e) {
      stop();
    },
  });

  $(document).on("mouseup", () => {
    stop();
  });
</script>

// https://juejin.cn/post/7216613455192375356
