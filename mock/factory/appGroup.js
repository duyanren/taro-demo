/*
 * @Author: dyr
 * @Description: appGroup接口数据
 * @Date: 2019-05-27 20:52:42
 * @LastEditors: dyr
 * @LastEditTime: 2019-05-27 21:23:17
 */
var Mock = require('mockjs');

const data = {
  code: 'A00000',
  data: {
    items: [
      {
        category: 'haoduo',
        location: 'in',
        pic1: 'http://static-s.iqiyi.com/ext/common/lego/3b9e1c5b937842e08057af2d51c526f9.jpeg',
        pic2: 'http://static-s.iqiyi.com/ext/common/lego/8dfd887b44ef41919279e69b6720c656.jpeg',
        subhead: '',
        title: '好多视频-黄金瞳',
        type: 'picture',
        word1: '',
        word2: '',
        word3: '',
      },
      {
        minas: [
          {
            imageUrl: 'http://m.iqiyipic.com/common/lego/20190122/b36179db24074857bda936d065a08234.png',
            pageUrl: '我是页面url',
            title: '我是小程序标题',
          },
        ],
        order: '2',
        title: '小程序-区块大标题（自定义可配置）',
        type: 'mina',
      },
      {
        category: 'VR',
        location: 'out',
        pic1: '',
        pic2: '',
        subhead: '',
        title: '爱奇艺VR',
        type: 'picture',
        word1: `【为你精选优质VR视频】  
          1.全景视频：近距离与小姐姐亲密接触；模拟体验极限运动；带你开脑洞进入科幻世界，带你击破次元壁化身二次元角色。 
           2.3D大片：好莱坞震撼3D大片+虚拟巨幕影院=你自己的私人观影厅。  3.互动视频：身临其境参与故事情节、紧急时刻改变故事发展。`,
        word2: `带你玩遍全球VR游戏】  
          1.鬼吹灯之牧野诡事VR：化身摸金校尉，探秘荒村古墓，续写摸金传奇。  
          2.萌宠大人VR：一键云养狗，汪星宝宝求带走。  3.VR女友：带上“眼镜”与你的女友亲密互动，享受甜蜜的爱恋！  4.灵域VR：经典国漫IP改编，承完美血脉、战万古苍穹！ `,
        word3:
          '【给你更好用的本地播放器】  1.更清晰：支持4K解码，超清还原临场体验！  2.更节能：优化解码技术，节能省电让你多看两部！  3.更便捷：支持所有常见视频格式，想看什么看什么！',
      },
      {
        apps: [
          {
            category: 'yuedu',
            huawei: 'http://www.iqiyi.com/',
            imageUrl: '',
            insideMarket: 'http://www.iqiyi.com/',
            oppo: 'http://www.iqiyi.com/',
            prompt: '一句话推荐一句话推荐',
            title: '我是阅读的标题',
            vivo: 'http://www.iqiyi.com/',
            xiaomi: 'http://www.iqiyi.com/',
          },
          {
            category: 'bada',
            huawei: 'http://www.iqiyi.com/',
            imageUrl: 'http://m.iqiyipic.com/common/lego/20190122/b36179db24074857bda936d065a08234.png',
            insideMarket: 'http://www.iqiyi.com/',
            oppo: 'http://www.iqiyi.com/',
            prompt: '二次元专属 漫画动画免费看',
            title: '叭哒',
            vivo: 'http://www.iqiyi.com/',
            xiaomi: 'http://www.iqiyi.com/',
          },
          {
            category: 'jisuban',
            huawei: '',
            imageUrl: 'http://m.iqiyipic.com/common/lego/20190107/304aa399d42e46c78d90b08eb01ead5e.png',
            insideMarket: 'http://www.iqiyi.com/',
            oppo: 'http://www.iqiyi.com/',
            prompt: '个性化视频推荐APP',
            title: '爱奇艺极速版',
            vivo: 'http://www.iqiyi.com/',
            xiaomi: '',
          },
          {
            category: 'qibabu',
            huawei: '',
            imageUrl: 'http://m.iqiyipic.com/common/lego/20180820/4be908da92524166baac193007f60d9c.png',
            insideMarket: 'http://www.iqiyi.com/',
            oppo: 'http://www.iqiyi.com/',
            prompt: '专为儿童设计，家长早教必备',
            title: '爱奇艺奇巴布',
            vivo: 'http://www.iqiyi.com/',
            xiaomi: '',
          },
        ],
        order: '4',
        title: '爱奇艺家族APP-区块大标题（自定义可配置）',
        type: 'app',
      },
      {
        category: 'qibabu',
        huawei: '',
        idType: 'video',
        insideMarket: 'http://www.iqiyi.com/',
        oppo: 'http://www.iqiyi.com/',
        pic1: 'http://static-s.iqiyi.com/ext/common/lego/d307216545dc44d4aa7d10bf9d43f984.jpeg',
        pic2: 'http://static-s.iqiyi.com/ext/common/lego/432f03bfe37f4ff7945f88ffa996b8c0.jpeg',
        picDownload: 'http://m.iqiyipic.com/common/lego/20180820/4be908da92524166baac193007f60d9c.png',
        qipuId: 2499421900,
        subhead: '只为儿童更好成长',
        title: '爱奇艺奇巴布',
        titleDownload: '爱奇艺奇巴布',
        type: 'video',
        video_duration: 139,
        video_image: 'http://m.iqiyipic.com/image/20190522/23/e4/v_129836463_m_601.jpg',
        video_title: '小猪佩奇骑剑龙 恐龙王国奇遇记 学习拼装',
        video_vid: '68d41dcf415f78eda4803dcae373c4b7',
        vivo: 'http://www.iqiyi.com/',
        word1: `内容提要 隐藏 “爱奇艺奇巴布”原名爱奇艺动画屋。爱奇艺首次启用全新少儿独立品牌“奇巴布”，升级为0-12岁小朋友精心设计的儿童应用，
          新版界面精美，交互层级简单，更加适合小朋友操作。 汇聚全球优质内容，涵盖儿歌、英语、故事、早教、动画、电影等类型，寓教于乐，陪伴孩子智趣成长。《旋风战车队》《好奇猴乔治》《少年钢铁侠》《汪汪队立大功 第4季》
          《巴巴爸爸》等上百部双语益智动画等你来看！ 特色功能 1. 安全益智：根据年龄推荐更适合孩子观看的动画，无广告干扰 
          2. 正版高清：高清动画超过4000部，涵盖迪士尼、BBC等精品益智内容 3. 双语切换：中英文自由切换，英语学习好工具 4. 定时提醒：超过观看时间自动停止播放，
          保护孩子视力 ****求打分、求建议~让我们一起把孩子们的动画屋建得更好！**** 官方QQ群：569583419 微信公众号：爱奇艺奇巴布 客服电话：400-923-7171`,
        word2: `1. 个人中心新增抓娃娃机小游戏，帮助宝宝提升认知和观察能力。 
          2. 搜索功能全面升级，查询更便捷、更方便。 
          3. 爱奇艺奇巴布持续更新独家精彩动画剧集《嘟当曼》、《汽车城之最酷变形》、《车宝四兄弟》、《无敌小鹿之安全成长》等；更多合家欢《冰雪奇缘》、《汽车总动员》等电影陪伴孩子快乐成长！`,
        word3: `特色功能 1. 安全益智：根据年龄推荐更适合孩子观看的动画，无广告干扰
           2. 正版高清：高清动画超过4000部，涵盖迪士尼、BBC等精品益智内容 
           3. 双语切换：中英文自由切换，英语学习好工具 
           4. 定时提醒：超过观看时间自动停止播放，保护孩子视力 ****求打分、
           求建议~让我们一起把孩子们的动画屋建得更好！**** 官方QQ群：569583419 微信公众号：爱奇艺奇巴布 客服电话：400-923-7171`,
        xiaomi: '',
      },
      {
        category: 'jisuban',
        huawei: '',
        insideMarket: 'http://www.iqiyi.com/',
        location: 'out',
        oppo: 'http://www.iqiyi.com/',
        pic1: 'http://static-s.iqiyi.com/ext/common/lego/987b0962cd09442fa166548c7bcd5874.jpeg',
        pic2: 'http://static-s.iqiyi.com/ext/common/lego/78b270433e774d39ae67fc5f63022059.jpeg',
        picDownload: 'http://m.iqiyipic.com/common/lego/20190107/304aa399d42e46c78d90b08eb01ead5e.png',
        subhead: '',
        title: '爱奇艺极速版',
        titleDownload: '爱奇艺极速版',
        type: 'picture',
        vivo: 'http://www.iqiyi.com/',
        word1: `【海量视频 抢先看】 《都挺好》：
          一部高品质的现实主义题材大剧，姚晨为你诠释中国式原生家庭 《黄金瞳》：
          张艺兴开挂探险热血鉴宝，逆袭人生突破不止 《青春有你》：小灰灰丁飞俊获小组第一，叶子铭《大人物》说唱超燃 
          《独孤皇后》：陈乔恩陈晓上演乱世甜恋，伉俪情深共患难 《妻子的浪漫旅行2》:丈夫们手写情书表白惹泪奔，买超漫画表白张嘉倪
           《逆流而上的你》：马丽潘粤明婚后受挫，联手开启逆袭之路 《声临其境2》：刘奕君诠释“空巢老人”，
           于毅配音《寻龙诀》神似夏雨原声 《招摇》：许凯白鹿甜蜜携手闯江湖，患难与共不忘初心 《王牌对王牌4》：
           沈腾灵魂发问华晨宇学坏，沙溢私房钱藏匿地点遭揭秘 《皓镧传》：吴谨言聂远再续前缘，携手演绎乱世深情 
           【爱奇艺极速版 极速获取所需，个性化更懂你】 全新的爱奇艺极速版是爱奇艺公司出品的一款极致精简的个性化推荐APP 在这里，你可以享受极速的视频服务
           ，包小可极速安装，省内存，不卡顿，速度快 在这里，
           你可以享受流畅的视频浏览体验，界面简洁，体验流畅，搜索结果更清晰 在这里，你可以第一时间获取想看的视频，
           娱乐八卦、趣味视频、热点资讯、生活小常识...覆盖全网热门短视频和长视频，好看到停不下来！`,
        word2:
          '1.全新的爱奇艺极速版，开播更快，更流畅！ 2.新用户限时专享免广告看视频特权，畅享海量精彩内容！ 3.界面焕然一新，更清爽~',
        word3: '',
        xiaomi: '',
      },
      {
        category: 'qixiu',
        location: 'in',
        pic1: 'http://static-s.iqiyi.com/ext/common/lego/5ff9ecab23e24fa48b662096b63a062f.jpeg',
        pic2: '',
        subhead: '',
        title: '奇秀直播-看偶像',
        type: 'picture',
        word1: `爱奇艺旗下的小视频直播交友互动平台
          ，新鲜小视频看不停，高颜值美女帅哥24小时不间断直播，
          有为青年集散地，坐享爱奇艺大把明星资源，没有中间商赚差价，和偶像面对面。 【精彩纷呈】：世界很大也很小，各
          种新鲜事带你看个够！ 【美女成群】：精心推荐最适合你的美女，
          拒绝尬聊！ 【左拥右抱】：知心姐姐教你撩妹、软萌萝莉带你召回初恋，来奇秀想啥来啥！`,
        word2: `1.小视频拍摄工具上线啦！拍出最美的自己，结交更多朋友吧！
           2.关注列表全面改版！关注的主播和好友动态一网打尽!
            3.成就任务上线,任务完成的越多挣得越多，快来做任务秒提现吧！
             4.红包拉新活动正式发布！邀请好友获得现金奖励，还能抽取好友佣金哦！邀请好友一起玩转奇秀~`,
        word3: `【明星围绕】：爱奇艺旗下小视频直播平台，
          每日各类明星探班现场直播，追星我们是认真的！ 
          【联系我们】 如有任何体验及功能上的反馈建议，
          请及时联系我们 官方微博：@奇秀 官方微信：@奇秀APP 官方网站：http://x.pps.tv/ 小视频用户交流群：611937793`,
      },
    ],
  },
  timestamp: '20190527191936',
};
module.exports = {
  appGroup: () => Mock.mock(data),
};
