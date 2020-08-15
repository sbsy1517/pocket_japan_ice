const goTopBtn = document.querySelector('.small_ghost')  

goTopBtn.addEventListener('click',goToTop,false);

//回到頂端
window.onscroll = function(){//window.onsroll為當前頁面的頁面滾動事件添加事件處理函數
    if(document.documentElement.scrollTop > 800){//偵測scroll的位置，超過800顯示按鈕
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  };
  
  
  function goToTop(e){//當點擊按鈕時，頁面回到最上頁
    e.preventDefault();
    document.documentElement.scrollTop = 0;
  };
