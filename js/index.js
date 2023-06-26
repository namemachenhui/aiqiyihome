//通用闭包模块
(function () {})();

//顶部导航部分
(function top() {
  //右侧更多频道
  let more = document.querySelector(".moreNav>.moreChannel_icon");
  let moreSect = document.querySelector(".moreNav>.moreChannel_sect");
  let moreTriangle = document.querySelector(".moreNav>.black_little_triangle");
  let moreNav = document.querySelector(".leftpart_nav>.moreNav");
  more.addEventListener("mouseenter", () => {
    more.style.transform = "rotate(180deg)";
    moreSect.style.display = "inline-block";
    moreTriangle.style.display = "inline-block";
  });
  moreNav.addEventListener("mouseleave", () => {
    more.style.transform = "rotate(0deg)";
    moreSect.style.display = "none";
    moreTriangle.style.display = "none";
  });

  // VIP滑动下拉
  let toBeVip = document.querySelector(".rightpart_nav .toBeVip");
  let vipDraw = toBeVip.querySelector(".draw_more");
  toBeVip.addEventListener("mouseenter", () => {
    vipDraw.style.display = "inline-block";
    vipDraw.offsetWidth;
    vipDraw.style.transform = "translateY(0px)";
    vipDraw.style.opacity = "1";
  });
  toBeVip.addEventListener("mouseleave", () => {
    vipDraw.style.display = "none";
    vipDraw.offsetWidth;
    vipDraw.style.transform = "translateY(40px)";
    vipDraw.style.opacity = "0";
  });

  //游戏滑动下拉
  let topGame = document.querySelector(".rightpart_nav .game");
  let gameDraw = topGame.querySelector(".draw_more");
  topGame.addEventListener("mouseenter", () => {
    gameDraw.style.display = "inline-block";
    gameDraw.offsetWidth;
    gameDraw.style.transform = "translateY(0px)";
    gameDraw.style.opacity = "1";
  });
  topGame.addEventListener("mouseleave", () => {
    gameDraw.style.display = "none";
    gameDraw.offsetWidth;
    gameDraw.style.transform = "translateY(40px)";
    gameDraw.style.opacity = "0";
  });

  //上传滑动下拉
  let topUpload = document.querySelector(".rightpart_nav .upload");
  let uploadDraw = topUpload.querySelector(".draw_more");
  topUpload.addEventListener("mouseenter", () => {
    uploadDraw.style.display = "inline-block";
    uploadDraw.offsetWidth;
    uploadDraw.style.transform = "translateY(0px)";
    uploadDraw.style.opacity = "1";
  });
  topUpload.addEventListener("mouseleave", () => {
    uploadDraw.style.display = "none";
    uploadDraw.offsetWidth;
    uploadDraw.style.transform = "translateY(40px)";
    uploadDraw.style.opacity = "0";
  });

  //客户端滑动下拉
  let topClient = document.querySelector(".rightpart_nav .client");
  let clientDraw = topClient.querySelector(".draw_more");
  topClient.addEventListener("mouseenter", () => {
    clientDraw.style.display = "inline-block";
    clientDraw.offsetWidth;
    clientDraw.style.transform = "translateY(0px)";
    clientDraw.style.opacity = "1";
  });
  topClient.addEventListener("mouseleave", () => {
    clientDraw.style.display = "none";
    clientDraw.offsetWidth;
    clientDraw.style.transform = "translateY(40px)";
    clientDraw.style.opacity = "0";
  });

  //看过历史滑动下拉
  let hasWatched = document.querySelector(".rightpart_nav .hasWatched");
  let watchedDraw = hasWatched.querySelector(".draw_more");
  hasWatched.addEventListener("mouseenter", () => {
    watchedDraw.style.display = "inline-block";
    watchedDraw.offsetWidth;
    watchedDraw.style.transform = "translateY(0px)";
    watchedDraw.style.opacity = "1";
  });
  hasWatched.addEventListener("mouseleave", () => {
    watchedDraw.style.display = "none";
    watchedDraw.offsetWidth;
    watchedDraw.style.transform = "translateY(40px)";
    watchedDraw.style.opacity = "0";
  });

  // 历史收藏预约切换
  let watchedTab = watchedDraw.querySelectorAll(
    ".hasWatched_top_menu .watched_item"
  );
  let noneTabContent = watchedDraw.querySelector(".when_watched_blink p");
  watchedTab.forEach((item, index) => {
    item.index = index;
    item.addEventListener("click", (event) => {
      switch (event.target.index) {
        case 0:
          noneTabContent.innerHTML = "登录可同步观看历史";
          break;
        case 1:
          noneTabContent.innerHTML = "登录可同步收藏内容";
          break;
        case 2:
          noneTabContent.innerHTML = "登录可同步预约内容";
          break;
      }
      watchedTab.forEach((item) => {
        item.classList.remove("watched_selected");
      });
      item.classList.add("watched_selected");
    });
  });

  //登录滑动下拉
  let personal = document.querySelector(".rightpart_nav .personal");
  let personaldraw = personal.querySelector(".draw_more");
  personal.addEventListener("mouseenter", () => {
    personaldraw.style.display = "inline-block";
    personaldraw.offsetWidth;
    personaldraw.style.transform = "translateY(0px)";
    personaldraw.style.opacity = "1";
  });
  personal.addEventListener("mouseleave", () => {
    personaldraw.style.display = "none";
    personaldraw.offsetWidth;
    personaldraw.style.transform = "translateY(40px)";
    personaldraw.style.opacity = "0";
  });

  // 向下滑动出现导航背景色
  let topHeader = document.querySelector("#app .top .topheader");
  let topNav = topHeader.querySelector(".topNav");
  window.onscroll = function () {
    // shortcut.style.opacity = '0'
    let scrollHeight = window.scrollY;
    if (scrollHeight === 0) {
      topHeader.style.backgroundColor = "transparent";
    } else if (scrollHeight > 5) {
      topHeader.style.backgroundColor = "rgba(20, 20, 20, 0.75)";
    }
  };
})();

//顶部轮播图
(function () {
  // 获取轮播容器
  let myBanner1 = document.querySelector("#mySwiperBanner1");
  // 获取颜色遮罩层
  let topimgMasks = myBanner1.querySelectorAll(".topimg_mask");
  // 获取背景层
  let topBannerBg = document.querySelector(".banner_bg_purecolor div");
  //获取轮播包装器，留待循环渲染
  let swiperWrapper1 = myBanner1.querySelector(".swiper-wrapper");
  // console.log("topimgMasks", topimgMasks, "swiperWrapper1", swiperWrapper1);
  // 获取轮播图菜单列表
  let changelist = document.querySelector("#changelist");
  let bannerItems = null;
  let sw1slideimgs = null;
  //获取数据
  axios
    .get("./data/data.json")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      // console.log(data);
      // console.log(data[0]);
      // {dataid: 1, img: './images/imgs2/banner01-chinarap.avif', title: '中国说唱', content: '临时抱佛脚真难听', bgcolor: '#363840'}
      render(data);
      topBannerGo();
    })
    .catch((err) => {
      // console.log(err);
    });
  //渲染数据
  function render(data) {
    let sW1str = "";
    let cLstr = "";
    data[0].topBanner.forEach((item) => {
      let { dataid, img, title, content, bgcolor } = item;
      // console.log(dataid, img, title, content, bgcolor);
      sW1str += `
        <div class="swiper-slide">
          <img src="${img}" data-imgid="${dataid}" data-imgcolor="${bgcolor}" alt="" />
        </div>
      `;
      cLstr += `
        <li id="li1" index="${dataid}">
          <p>${title}</p>
          <p>${content}</p>
        </li>
      `;
    });
    swiperWrapper1.innerHTML = sW1str;
    changelist.innerHTML = cLstr;
    bannerItems = changelist.querySelectorAll("li");
    bannerItems[0].classList.add("active_banner_item");
    // 获取图片，留待获取颜色改变遮罩层
    sw1slideimgs = swiperWrapper1.querySelectorAll(".swiper-slide img");
    // console.log(sw1slideimgs);
  }

  // 轮播方法，因为异步，要封装成方法留渲染完数据待之后调用
  function topBannerGo() {
    // 顶部大图轮播
    var mySwiper1 = new Swiper("#mySwiperBanner1", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 自动播放
      autoplay: {
        // 每个滑块延迟
        delay: 2000,
        // 交互后停止
        disableOnInteraction: false,
      },
      // 特效：淡出淡入
      effect: "fade",
    });
    //获取渲染后的轮播图菜单每一项
    changelist.addEventListener("mouseover", function (event) {
      let index = event.target.getAttribute("index");
      if (index) {
        mySwiper1.slideTo(index);
        bannerItems.forEach((item) => {
          item.classList.remove("active_banner_item");
        });
        bannerItems[index - 1].classList.add("active_banner_item");

        changeMasks(index);
        // 暂停轮播
        mySwiper1.autoplay.stop();
      }
    });
    changelist.addEventListener("mouseleave", function (event) {
      // 继续轮播
      mySwiper1.autoplay.start();
    });
    // 让右侧的菜单随着内容轮播而轮播F
    mySwiper1.on("slideChange", function () {
      let index = mySwiper1.activeIndex;
      index = index == bannerItems.length + 1 ? 1 : index;
      changeMasks(index);
      bannerItems.forEach((item) => {
        item.classList.remove("active_banner_item");
      });
      bannerItems[index - 1].classList.add("active_banner_item");
    });
  }

  // 改变遮罩颜色
  function changeMasks(index) {
    let mskColor = sw1slideimgs[index - 1].dataset.imgcolor;
    // console.log(mskColor);
    topimgMasks.forEach((item) => {
      if (item.classList.contains("topimg_mask1"))
        item.style.boxShadow = `inset 0px 0px 15px 15px ${mskColor}`;
      if (item.classList.contains("topimg_mask2"))
        item.style.boxShadow = `inset 0px 0px 30px 30px ${mskColor}`;
      if (item.classList.contains("topimg_mask3"))
        item.style.boxShadow = `inset 0px 0px 150px 175px ${mskColor}`;
    });
    // 改变背景色
    topBannerBg.style.backgroundColor = `${mskColor}`;
  }
})();

//主体内容超多板块
(function () {
  // 为板块们设置递减(逆向递增)的层级
  +(function setIndexes() {
    // 如果设置负的，hover无反应（不知为什么）
    // 所以要正的，但上面的要比上面的高，所以逆着递增
    try {
      let sections = document.querySelectorAll(
        ".main_wrapper .allkinds_section"
      );
      // console.log("sections", sections);
      sections = Array.from(sections);
      sections.reverse();
      // console.log("sections", sections);

      let index = 1;
      sections.forEach((item) => {
        item.style.zIndex = index++;
      });
    } catch (err) {
      console.log(err);
    }
  })();

  //猜你喜欢板块
  +(function gyl() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].gylSection);
        let { textBanner, content } = data[1].gylSection;
        // 渲染文本轮播
        renderTextBanner(textBanner);
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();

        // 添加事件
        // showHoverItem();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染标题的文本轮播
    function renderTextBanner(textBanner) {
      let textwrapper = document.querySelector(
        ".gyl_header .text_banner .swiper-wrapper"
      );
      let str = "";
      //item:{textId: 1, text: '陈哲远模仿狂飙泰叔，好绝', column: '爱聊专访'}
      textBanner.forEach(({ textId, text, column }) => {
        str += `
          <div class="swiper-slide">
            <a href="">
              <span>${text}</span
              ><span
                >${column}
                <span
                  style="
                    display: inline-block;
                    transform: scale(1, 0.8) translateY(-1px);
                  "
                  >〉</span
                ></span
              >
            </a>
          </div>
        `;
      });
      textwrapper.innerHTML = str;
    }
    // 渲染主要内容
    let gylWrapper = null;
    function renderContent(content) {
      gylWrapper = document.querySelector(
        "#gyl_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          gylId,
          showType,
          hasInfo,
          info,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
        <div class="swiper-slide">
          <div class="content_wrapper">
            <!-- 一开始展示的东西 -->
            <div class="init_item short_init_box">
              <div class="init_item_imageBox">
                <img src="${initPic}" />
                <span class="img_info">${hasInfo ? info.episodes : ""}</span>
              </div>
              <div class="name_and_intro">
                <p>${name + (index + 1)}</p>
                <p>${briefIntro}</p>
              </div>
            </div>
            <!-- 滑动上去之后展示的东西 -->
            <div class="hover_item">
              <div class="hover_item_imageBox">
                <img
                  class="contentImg"
                  src="${hoverPic}"
                  alt=""
                />
                <!-- 评分或集数 -->
                <span class="grades_or_episodes">${
                  hasInfo ? info.episodes : ""
                }</span>
                <sapn class="collect_star"></sapn>
              </div>
              <div class="relative_info">
                <div class="title">${title + (index + 1)}</div>
                <div class="tag_wrapper">
                  ${strTags}
                </div>
                <div class="actors_wrapper">
                  ${strActors}
                </div>
                <div class="description">
                  ${description}
                </div>
                <div class="imme_play_btn">立即播放</div>
              </div>
            </div>
          </div>
        </div>
        `;
        str += strSlide;
      });
      gylWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 标题轮播
      let textSwiper = new Swiper("#text_swiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1000,
        },
        // effect:"fade"
      });

      // 内容轮播
      let gylBtnWraper = document.querySelector(".gyl_btn_wrapper"); //获取按钮，进行样式操作
      let gylNext = gylBtnWraper.querySelector(".gyl_next");
      let gylPrev = gylBtnWraper.querySelector(".gyl_prev");
      let gylSwipwer = new Swiper("#gyl_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".gyl_next",
          prevEl: ".gyl_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              gylNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(gylNext, gylPrev);
            // gylNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
      if (!(swiper.isBeginning || swiper.isEnd)) {
        gylPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
        gylNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
      } */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            gylPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            gylNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            gylNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            gylPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            gylPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            gylNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }

    // 添加mouseenter事件
    /* function showHoverItem() {
      gylWrapper.addEventListener("mouseover", function (event) {
        let { target } = event;
        console.log(gylWrapper);
        // console.log(target);
        console.log(target.classList);
        if(Array.from(target.classList).("imageBox")){
          console.log('imageBox');
        }
      });
    } */
  })();

  // 正在热播板块
  +(function ihs() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].ihsSection);
        let { content } = data[1].ihsSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let ihsWrapper = null;
    function renderContent(content) {
      ihsWrapper = document.querySelector(
        "#ihs_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          ihsId,
          showType,
          hasInfo,
          info,
          hasFeature,
          featureId,
          features,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
      <div class="swiper-slide">
        <div class="content_wrapper">
          <!-- 一开始展示的东西 -->
          <div class="init_item short_init_box">
            <div class="init_item_imageBox">
              <img src="${initPic}" />
              <span class="img_info">${hasInfo ? info.episodes : ""}</span>
              ${
                hasFeature
                  ? `<span class="item_feature ${features[featureId]}"></span>`
                  : ""
              }
            </div>
            <div class="name_and_intro">
              <p>${name + (index + 1)}</p>
              <p>${briefIntro}</p>
            </div>
          </div>
          <!-- 滑动上去之后展示的东西 -->
          <div class="hover_item">
            <div class="hover_item_imageBox">
              <img
                class="contentImg"
                src="${hoverPic}"
                alt=""
              />
              <!-- 评分或集数 -->
              <span class="grades_or_episodes">${
                hasInfo ? info.episodes : ""
              }</span>
              <sapn class="collect_star"></sapn>
            </div>
            <div class="relative_info">
              <div class="title">${title + (index + 1)}</div>
              <div class="tag_wrapper">
                ${strTags}
              </div>
              <div class="actors_wrapper">
                ${strActors}
              </div>
              <div class="description">
                ${description}
              </div>
              <div class="imme_play_btn">立即播放</div>
            </div>
          </div>
        </div>
      </div>
      `;
        str += strSlide;
      });
      ihsWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let ihsBtnWraper = document.querySelector(".ihs_btn_wrapper"); //获取按钮，进行样式操作
      let ihsNext = ihsBtnWraper.querySelector(".ihs_next");
      let ihsPrev = ihsBtnWraper.querySelector(".ihs_prev");
      let ihsSwipwer = new Swiper("#ihs_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".ihs_next",
          prevEl: ".ihs_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              ihsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(ihsNext, ihsPrev);
            // ihsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
    if (!(swiper.isBeginning || swiper.isEnd)) {
      ihsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
      ihsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
    } */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            ihsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            ihsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            ihsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            ihsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            ihsPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            ihsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();

  // 电视剧板块
  +(function tvd() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].tvdSection);
        let { content } = data[1].tvdSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let tvdWrapper = null;
    function renderContent(content) {
      tvdWrapper = document.querySelector(
        "#tvd_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          tvdId,
          showType,
          hasInfo,
          info,
          hasFeature,
          featureId,
          features,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
      <div class="swiper-slide">
        <div class="content_wrapper">
          <!-- 一开始展示的东西 -->
          <div class="init_item tall_init_box">
            <div class="init_item_imageBox">
              <img src="${initPic}" />
              <span class="img_info">${hasInfo ? info.episodes : ""}</span>
              ${
                hasFeature
                  ? `<span class="item_feature ${features[featureId]}"></span>`
                  : ""
              }
            </div>
            <div class="name_and_intro">
              <p>${name + (index + 1)}</p>
              <p>${briefIntro}</p>
            </div>
          </div>
          <!-- 滑动上去之后展示的东西 -->
          <div class="hover_item">
            <div class="hover_item_imageBox">
              <img
                class="contentImg"
                src="${hoverPic}"
                alt=""
              />
              <!-- 评分或集数 -->
              <span class="grades_or_episodes">${
                hasInfo ? info.episodes : ""
              }</span>
              <sapn class="collect_star"></sapn>
            </div>
            <div class="relative_info">
              <div class="title">${title + (index + 1)}</div>
              <div class="tag_wrapper">
                ${strTags}
              </div>
              <div class="actors_wrapper">
                ${strActors}
              </div>
              <div class="description">
                ${description}
              </div>
              <div class="imme_play_btn">立即播放</div>
            </div>
          </div>
        </div>
      </div>
      `;
        str += strSlide;
      });
      tvdWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let tvdBtnWraper = document.querySelector(".tvd_btn_wrapper"); //获取按钮，进行样式操作
      let tvdNext = tvdBtnWraper.querySelector(".tvd_next");
      let tvdPrev = tvdBtnWraper.querySelector(".tvd_prev");
      let tvdSwipwer = new Swiper("#tvd_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".tvd_next",
          prevEl: ".tvd_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              tvdNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(tvdNext, tvdPrev);
            // tvdNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
    if (!(swiper.isBeginning || swiper.isEnd)) {
      tvdPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
      tvdNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
    } */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            tvdPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            tvdNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            tvdNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            tvdPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            tvdPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            tvdNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();

  // 电影板块
  +(function mov() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].movSection);
        let { content } = data[1].movSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let movWrapper = null;
    function renderContent(content) {
      movWrapper = document.querySelector(
        "#mov_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          hasInfo,
          info,
          hasFeature,
          featureId,
          features,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
    <div class="swiper-slide">
      <div class="content_wrapper">
        <!-- 一开始展示的东西 -->
        <div class="init_item tall_init_box">
          <div class="init_item_imageBox">
            <img src="${initPic}" />
            <span class="img_info">${hasInfo ? info.grades : ""}</span>
            ${
              hasFeature
                ? `<span class="item_feature ${features[featureId]}"></span>`
                : ""
            }
          </div>
          <div class="name_and_intro">
            <p>${name + (index + 1)}</p>
            <p>${briefIntro}</p>
          </div>
        </div>
        <!-- 滑动上去之后展示的东西 -->
        <div class="hover_item">
          <div class="hover_item_imageBox">
            <img
              class="contentImg"
              src="${hoverPic}"
              alt=""
            />
            <!-- 评分或集数 -->
            <span class="grades_or_episodes">${
              hasInfo ? info.grades : ""
            }</span>
            <sapn class="collect_star"></sapn>
          </div>
          <div class="relative_info">
            <div class="title">${title + (index + 1)}</div>
            <div class="tag_wrapper">
              ${strTags}
            </div>
            <div class="actors_wrapper">
              ${strActors}
            </div>
            <div class="description">
              ${description}
            </div>
            <div class="imme_play_btn">立即播放</div>
          </div>
        </div>
      </div>
    </div>
    `;
        str += strSlide;
      });
      movWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let movBtnWraper = document.querySelector(".mov_btn_wrapper"); //获取按钮，进行样式操作
      let movNext = movBtnWraper.querySelector(".mov_next");
      let movPrev = movBtnWraper.querySelector(".mov_prev");
      let movSwipwer = new Swiper("#mov_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".mov_next",
          prevEl: ".mov_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              movNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(movNext, movPrev);
            // movNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
  if (!(swiper.isBeginning || swiper.isEnd)) {
    movPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
    movNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
  } */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            movPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            movNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            movNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            movPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            movPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            movNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();

  // 云影院精选
  +(function cms() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].cmsSection);
        let { content } = data[1].cmsSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let cmsWrapper = null;
    function renderContent(content) {
      cmsWrapper = document.querySelector(
        "#cms_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          hasInfo,
          info,
          hasFeature,
          featureId,
          features,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
    <div class="swiper-slide">
      <div class="content_wrapper">
        <!-- 一开始展示的东西 -->
        <div class="init_item tall_init_box">
          <div class="init_item_imageBox">
            <img src="${initPic}" />
            <span class="img_info">${hasInfo ? info.grades : ""}</span>
            ${
              hasFeature
                ? `<span class="item_feature ${features[featureId]}"></span>`
                : ""
            }
          </div>
          <div class="name_and_intro">
            <p>${name + (index + 1)}</p>
            <p>${briefIntro}</p>
          </div>
        </div>
        <!-- 滑动上去之后展示的东西 -->
        <div class="hover_item">
          <div class="hover_item_imageBox">
            <img
              class="contentImg"
              src="${hoverPic}"
              alt=""
            />
            <!-- 评分或集数 -->
            <span class="grades_or_episodes">${
              hasInfo ? info.grades : ""
            }</span>
            <sapn class="collect_star"></sapn>
          </div>
          <div class="relative_info">
            <div class="title">${title + (index + 1)}</div>
            <div class="tag_wrapper">
              ${strTags}
            </div>
            <div class="actors_wrapper">
              ${strActors}
            </div>
            <div class="description">
              ${description}
            </div>
            <div class="imme_play_btn">立即播放</div>
          </div>
        </div>
      </div>
    </div>
    `;
        str += strSlide;
      });
      cmsWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let cmsBtnWraper = document.querySelector(".cms_btn_wrapper"); //获取按钮，进行样式操作
      let cmsNext = cmsBtnWraper.querySelector(".cms_next");
      let cmsPrev = cmsBtnWraper.querySelector(".cms_prev");
      let cmsSwipwer = new Swiper("#cms_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".cms_next",
          prevEl: ".cms_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              cmsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(cmsNext, cmsPrev);
            // cmsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
  if (!(swiper.isBeginning || swiper.isEnd)) {
    cmsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
    cmsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
  } */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            cmsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            cmsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            cmsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            cmsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            cmsPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            cmsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();

  // 云影院精选
  +(function qvs() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].qvsSection);
        let { content } = data[1].qvsSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let qvsWrapper = null;
    function renderContent(content) {
      qvsWrapper = document.querySelector(
        "#qvs_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let {
          name,
          initPic,
          hasInfo,
          info,
          hasFeature,
          featureId,
          features,
          briefIntro,
          title,
          hoverPic,
          tags,
          actors,
          description,
        } = item;
        let strActors = "";
        let strTags = "";
        let strSlide = "";
        // 拼接标签
        actors.forEach((item) => {
          strActors += `<span>${item}</span>`;
        });
        // 拼接演员
        tags.forEach((item) => {
          strTags += `<span class="tag">${item}</span>`;
        });

        strSlide = `
  <div class="swiper-slide">
    <div class="content_wrapper">
      <!-- 一开始展示的东西 -->
      <div class="init_item short_init_box">
        <div class="init_item_imageBox">
          <img src="${initPic}" />
          <span class="img_info">${hasInfo ? info.episodes : ""}</span>
          ${
            hasFeature
              ? `<span class="item_feature ${features[featureId]}"></span>`
              : ""
          }
        </div>
        <div class="name_and_intro">
          <p>${name + (index + 1)}</p>
          <p>${briefIntro}</p>
        </div>
      </div>
      <!-- 滑动上去之后展示的东西 -->
      <div class="hover_item">
        <div class="hover_item_imageBox">
          <img
            class="contentImg"
            src="${hoverPic}"
            alt=""
          />
          <!-- 评分或集数 -->
          <span class="grades_or_episodes">${
            hasInfo ? info.episodes : ""
          }</span>
          <sapn class="collect_star"></sapn>
        </div>
        <div class="relative_info">
          <div class="title">${title + (index + 1)}</div>
          <div class="tag_wrapper">
            ${strTags}
          </div>
          <div class="actors_wrapper">
            ${strActors}
          </div>
          <div class="description">
            ${description}
          </div>
          <div class="imme_play_btn">立即播放</div>
        </div>
      </div>
    </div>
  </div>
  `;
        str += strSlide;
      });
      qvsWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let qvsBtnWraper = document.querySelector(".qvs_btn_wrapper"); //获取按钮，进行样式操作
      let qvsNext = qvsBtnWraper.querySelector(".qvs_next");
      let qvsPrev = qvsBtnWraper.querySelector(".qvs_prev");
      let qvsSwipwer = new Swiper("#qvs_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".qvs_next",
          prevEl: ".qvs_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            //Swiper初始化了
            // console.log(swiper.slides);
            // 判断slide的数量，如果小于6就都不亮
            if (swiper.slides.length <= 6) {
              qvsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }

            // console.log(qvsNext, qvsPrev);
            // qvsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;//在css中设置默认头不亮尾亮
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            /* console.log(!(swiper.isBeginning || swiper.isEnd));
if (!(swiper.isBeginning || swiper.isEnd)) {
  qvsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
  qvsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
} */
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            qvsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            qvsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            qvsNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            qvsPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            qvsPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            qvsNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();

  // 赛事直播精选
  +(function mel() {
    // 获取并渲染数据
    axios
      .get("./data/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        // console.log(data[1].melSection);
        let { content } = data[1].melSection;
        // 渲染内容
        renderContent(content);
        // 渲染完后控制轮播
        swiperBanner();
      })
      .catch((err) => {
        console.log(err);
      });

    // 渲染主要内容
    let melWrapper = null;
    function renderContent(content) {
      melWrapper = document.querySelector(
        "#mel_content_swipwer .swiper-wrapper"
      );
      let str = "";
      content.forEach((item, index) => {
        let { matchName, matchTeams, matchTeamFlags, matchScore, matchStatus } =
          item;

        str += `
        <div class="swiper-slide">
          <div class="content_wrapper">
            <!-- 一开始展示的东西 -->
            <div class="init_item short_init_box">
              <div class="match_name">${matchName}</div>
              <div class="match_info">
                <div class="match_team left_country">
                  <img
                    src="${matchTeamFlags[0]}"
                    alt=""
                  />
                </div>
                <div class="match_score">1 : 0</div>
                <div class="match_team right_country">
                  <img
                    src="${matchTeamFlags[1]}"
                    alt=""
                  />
                </div>
              </div>
              <div class="match_member">
                <span>${matchTeams[0]}</span>
                <span>${matchTeams[1]}</span>
              </div>
              <div class="match_status">
                ${
                  matchStatus === 1
                    ? `<span class="living">直播中</span>`
                    : `<span class="reseve">预约</span>`
                }
              </div>
            </div>
          </div>
        </div>
      `;
      });
      melWrapper.innerHTML = str;
    }

    // 轮播方法
    function swiperBanner() {
      // 内容轮播
      let melBtnWraper = document.querySelector(".mel_btn_wrapper"); //获取按钮，进行样式操作
      let melNext = melBtnWraper.querySelector(".mel_next");
      let melPrev = melBtnWraper.querySelector(".mel_prev");
      let melSwipwer = new Swiper("#mel_content_swipwer", {
        slidesPerView: 6, //设置slider容器能够同时显示的slides数量
        spaceBetween: 17, //设置成员之间的间距
        slidesPerGroup: 6, //5个为一组
        navigation: {
          nextEl: ".mel_next",
          prevEl: ".mel_prev",
        },
        on: {
          // 初始，上一个暗淡，下一个高亮
          init: function (swiper) {
            if (swiper.slides.length <= 6) {
              melNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            }
          },
          // 中间，切换后判断是否是头尾，不是头或尾，上下都高亮，一个是头或尾，就都不亮，让到头到尾控制谁亮
          slideChange: function (swiper) {
            console.log(swiper.isBeginning || swiper.isEnd);
            if (swiper.isBeginning || swiper.isEnd) return;
            melPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
            melNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
          // 到尾，下一个暗淡，上一个高亮
          reachEnd: function () {
            // 处理轮播走到最后一个项时的逻辑
            melNext.style.backgroundImage = `url('./images/self_right_arrow.svg')`;
            melPrev.style.backgroundImage = `url('./images/self_left_arrow_hover.svg')`;
          },
          // 到头，上一个暗淡，下一个高亮
          reachBeginning: function () {
            // 处理轮播走到最后一个项时的逻辑
            melPrev.style.backgroundImage = `url('./images/self_left_arrow.svg')`;
            melNext.style.backgroundImage = `url('./images/self_right_arrow_hover.svg')`;
          },
        },
      });
    }
  })();
})();

// 其他操作
(function otherOperations() {
  let canRecommend = false;
  let cookies = document.cookie;
  if (cookies.includes("vip_loaded")) {
    // console.log("有");
    let time = Date.now();
    let timeCookie = cookies.split(";").find((item) => {
      return item.includes("vip_loaded");
    });
    // console.log("timeCookie", timeCookie);
    let lastTime = timeCookie.split("=")[1];

    let setTime = 10000;
    // console.log(time - lastTime, setTime);
    // console.log(time - lastTime > setTime);
    // 超过上次推荐的时间，则可以继续在刷新页面后推荐
    if (time - lastTime > setTime) {
      canRecommend = true;
      // 更新cookie

      document.cookie = `vip_loaded=${time}`;
      // cookies = `vip_loaded=${time}`;//基本类型非饮用，cookies改了document的cookie不改
      // console.log(time);
      // console.log(document.cookie);
      // return;
    }
  } else {
    // console.log("没有");
    let time = Date.now();
    // console.log("time", time);
    document.cookie = `vip_loaded=${time}`;
    whenLoaded.style.display = "block";
    lvrMask.style.display = "block";
  }

  let whenLoaded = document.querySelector(".others .loaded_vip_recommend");
  let whenLoadedX = whenLoaded.querySelector(".whenloaded_x");
  let lvrMask = document.querySelector(".others .lvr_mask");

  // console.log(whenLoaded, whenLoadedX, lvrMask);
  document.addEventListener("DOMContentLoaded", function () {
    // 在 DOMContentLoaded 事件中执行的代码
    console.log("DOM 已加载完成");
    console.log(canRecommend);
    if (canRecommend) {
      whenLoaded.style.display = "block";
      lvrMask.style.display = "block";
    }
  });
  whenLoadedX.addEventListener("click", function () {
    whenLoaded.style.display = "none";
    // console.log(lvrMask);
    // lvrMask.style.display = "none;";//里面有个分号，找了半天
    lvrMask.style.display = "none";
    // console.log(lvrMask);
  });
})();
