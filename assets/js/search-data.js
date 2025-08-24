// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-strong-ling-strong-luo",
    title: "<strong>Ling</strong> Luo",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-wiki",
              title: "Wiki",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MyWiki/";
              },
            },{id: "post-vr-sketch-development-log",
        
          title: "VR Sketch Development Log",
        
        description: "VR Development",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2020/SketchVR/";
          
        },
      },{id: "post-detectron代码分析-从faster-r-cnn-到-mask-r-cnn",
        
          title: "Detectron代码分析：从Faster R-CNN 到 Mask R-CNN",
        
        description: "Pytorch version of Detectron",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2018/faster-rcnn/";
          
        },
      },{id: "post-基于rasa-nlu的微信chatbot",
        
          title: "基于Rasa_NLU的微信chatbot",
        
        description: "Rasa_NLU + Rasa_Core + wxpy = Wechat chatbot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2017/chatbot/";
          
        },
      },{id: "post-基于音素识别的语音相似度研究",
        
          title: "基于音素识别的语音相似度研究",
        
        description: "exploring how to find similar content without ASR for scam recognition task",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2017/phoneme/";
          
        },
      },{id: "post-肺部结节检测",
        
          title: "肺部结节检测",
        
        description: "experience in the Tianchi Lung Nodule Detection Contest",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2017/luna/";
          
        },
      },{id: "post-裂缝识别",
        
          title: "裂缝识别",
        
        description: "人工识别像划重点一样，真的很枯燥很累啊",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2015/RoadNN/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-sketchx-of-surrey-sparkles-smile",
          title: 'Joined SketchX of Surrey! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-the-first-fine-grained-vr-sketch-dataset-is-available-now",
          title: 'The first fine-grained VR Sketch dataset is available now!',
          description: "",
          section: "News",},{id: "news-sketching-into-the-metaverse-the-first-fine-grained-vr-sketch-based-shape-retrieval-demo-1-is-in-aiuk-2023",
          title: 'Sketching into the Metaverse: [The first fine-grained VR sketch based shape retrieval demo][1]...',
          description: "",
          section: "News",},{id: "news-passed-the-viva-defense-mortar-board",
          title: 'Passed the viva defense!:mortar_board:',
          description: "",
          section: "News",},{id: "projects-3d-vr-sketch",
          title: '3D VR Sketch',
          description: "Towards 3D VR-Sketch to 3D Shape Retrieval",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3DSketch3DV/";
            },},{id: "projects-wechat-chatbot",
          title: 'Wechat Chatbot',
          description: "Chatbot based on Rasa_NLU and Wechat api",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Chatbot/";
            },},{id: "projects-neuralfish",
          title: 'NeuralFish',
          description: "Simulator of fish with Neural Network and p5.js",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NeuralFish/";
            },},{id: "supervision-基于二维草图的三维模型检索",
          title: '基于二维草图的三维模型检索',
          description: "毕业设计旨在研究基于二维草图的三维模型检索系统，结合深度学习技术提取草图特征并与三维模型数据库匹配。",
          section: "Supervision",handler: () => {
              window.location.href = "/supervision/thesis1/";
            },},{id: "supervision-基于二维草图的三维模型重建",
          title: '基于二维草图的三维模型重建',
          description: "毕业设计旨在研究基于二维草图的三维模型重建技术，以满足虚拟现实和游戏行业对三维内容的需求。",
          section: "Supervision",handler: () => {
              window.location.href = "/supervision/thesis2/";
            },},{id: "supervision-基于二维草图的细粒度图像检索",
          title: '基于二维草图的细粒度图像检索',
          description: "毕业设计旨在研究通过二维草图进行细粒度图像检索，比较基于草图和文本的检索方法。",
          section: "Supervision",handler: () => {
              window.location.href = "/supervision/thesis3/";
            },},{id: "teaching-python-programming",
          title: 'Python Programming',
          description: "面向非计算机专业学生的Python编程基础课，旨在培养学生的计算思维和问题解决能力， 掌握Python语言核心知识，理解程序设计方法和技巧，学会用Python解决实际问题。",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/python/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E%67.%72%6F%77%6C%69%6E%67.%6C%75%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Rowl1ng", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rowl1ng", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3504-4110", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sqHkGCQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/LingLuo95", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@lingluo1167", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://rowl1ng.com/blog", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
