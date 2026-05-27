const quizData = [
  { chinese: "沙发", pinyin: "shāfā", meaning: "소파" },
  { chinese: "抽", pinyin: "chōu", meaning: "(담배를) 피우다" },
  { chinese: "活儿", pinyin: "huór", meaning: "일" },
  { chinese: "气", pinyin: "qì", meaning: "성내다, 화내다" },
  { chinese: "批评", pinyin: "pīpíng", meaning: "비평하다, 꾸짖다" },
  { chinese: "社会", pinyin: "shèhuì", meaning: "사회" },
  { chinese: "平等", pinyin: "píngděng", meaning: "평등, 평등하다" },
  { chinese: "模范", pinyin: "mófàn", meaning: "모범, 모범적이다" },
  { chinese: "改变", pinyin: "gǎibiàn", meaning: "변하다, 바꾸다" },
  { chinese: "认错", pinyin: "rèncuò", meaning: "잘못을 인정하다" },
  { chinese: "今后", pinyin: "jīnhòu", meaning: "이제부터, 앞으로" },
  { chinese: "家务", pinyin: "jiāwù", meaning: "집안일, 가사" },
  { chinese: "劝", pinyin: "quàn", meaning: "권하다, 중재하다" },
  { chinese: "表现", pinyin: "biǎoxiàn", meaning: "표현하다, 태도, 모습" },
  { chinese: "演讲", pinyin: "yǎnjiǎng", meaning: "강연, 연설" },
  { chinese: "题目", pinyin: "tímù", meaning: "제목, 문제" },
  { chinese: "复杂", pinyin: "fùzá", meaning: "복잡하다" },
  { chinese: "到处", pinyin: "dàochù", meaning: "도처, 곳곳" },
  { chinese: "连", pinyin: "lián", meaning: "~조차도 / 连～也" },
  { chinese: "男人", pinyin: "nánrén", meaning: "남자" },
  { chinese: "认为", pinyin: "rènwéi", meaning: "여기다, 생각하다" },
  { chinese: "特点", pinyin: "tèdiǎn", meaning: "특징" },
  { chinese: "纸", pinyin: "zhǐ", meaning: "종이" },
  { chinese: "笔", pinyin: "bǐ", meaning: "필기구, 펜" },
  { chinese: "经理", pinyin: "jīnglǐ", meaning: "사장, 매니저" },
  { chinese: "秘书", pinyin: "mìshū", meaning: "비서" },
  { chinese: "报纸", pinyin: "bàozhǐ", meaning: "신문" },
  { chinese: "贵", pinyin: "guì", meaning: "귀한, 귀사의/귀하의" },
  { chinese: "客人", pinyin: "kèrén", meaning: "손님" },
  { chinese: "参观", pinyin: "cānguān", meaning: "참관하다, 견학하다" },
  { chinese: "简历", pinyin: "jiǎnlì", meaning: "이력서" },
  { chinese: "证明", pinyin: "zhèngmíng", meaning: "증명하다, 증명" },
  { chinese: "毕业证", pinyin: "bìyèzhèng", meaning: "졸업증서" },
  { chinese: "件", pinyin: "jiàn", meaning: "건, 개" },
  { chinese: "发展", pinyin: "fāzhǎn", meaning: "발전하다" },
  { chinese: "前途", pinyin: "qiántú", meaning: "전망, 앞날" },
  { chinese: "能力", pinyin: "nénglì", meaning: "능력" },
  { chinese: "技术", pinyin: "jìshù", meaning: "기술" },
  { chinese: "增加", pinyin: "zēngjiā", meaning: "증가하다" },
  { chinese: "收入", pinyin: "shōurù", meaning: "수입" },
  { chinese: "面试", pinyin: "miànshì", meaning: "면접을 치르다" },
  { chinese: "通知", pinyin: "tōngzhī", meaning: "통지하다, 알리다" },
  { chinese: "招", pinyin: "zhāo", meaning: "모집하다" },
  { chinese: "其中", pinyin: "qízhōng", meaning: "그중" },
  { chinese: "印象", pinyin: "yìnxiàng", meaning: "인상" },
  { chinese: "年龄", pinyin: "niánlíng", meaning: "나이, 연령" },
  { chinese: "比较", pinyin: "bǐjiào", meaning: "비교적" },
  { chinese: "熟悉", pinyin: "shúxī", meaning: "익숙하다, 잘 알다" },
  { chinese: "负责", pinyin: "fùzé", meaning: "책임지다, 책임감이 있다" },
  { chinese: "提高", pinyin: "tígāo", meaning: "향상시키다, 높이다" },
  { chinese: "喜糖", pinyin: "xǐtáng", meaning: "결혼 사탕" },
  { chinese: "喜事", pinyin: "xǐshì", meaning: "경사, 기쁜 일" },
  { chinese: "喜酒", pinyin: "xǐjiǔ", meaning: "결혼 축하주" },
  { chinese: "新娘", pinyin: "xīnniáng", meaning: "신부" },
  { chinese: "怪不得", pinyin: "guàibude", meaning: "과연, 그러기에, 어쩐지" },
  { chinese: "新郎", pinyin: "xīnláng", meaning: "신랑" },
  { chinese: "浪漫", pinyin: "làngmàn", meaning: "낭만적이다" },
  { chinese: "婚礼", pinyin: "hūnlǐ", meaning: "결혼식, 혼례" },
  { chinese: "日子", pinyin: "rìzi", meaning: "날짜" },
  { chinese: "顺", pinyin: "shùn", meaning: "순조롭다" },
  { chinese: "举", pinyin: "jǔ", meaning: "들다" },
  { chinese: "干杯", pinyin: "gānbēi", meaning: "건배하다" },
  { chinese: "拜", pinyin: "bài", meaning: "절하다" },
  { chinese: "恋爱", pinyin: "liàn’ài", meaning: "연애하다, 연애" },
  { chinese: "经过", pinyin: "jīngguò", meaning: "경험하다, 과정, 경과" },
  { chinese: "补充", pinyin: "bǔchōng", meaning: "보충하다" },
  { chinese: "同班同学", pinyin: "tóngbān tóngxué", meaning: "동급생, 같은 반 학우" },
  { chinese: "突然", pinyin: "tūrán", meaning: "갑자기" },
  { chinese: "故事", pinyin: "gùshi", meaning: "이야기" },
  { chinese: "精彩", pinyin: "jīngcǎi", meaning: "훌륭하다, 뛰어나다" },
  { chinese: "和美", pinyin: "héměi", meaning: "사이가 좋다, 화목하다" },
  { chinese: "白头到老", pinyin: "bái tóu dào lǎo", meaning: "백년해로하다" },
  { chinese: "白头偕老", pinyin: "bái tóu xié lǎo", meaning: "백년해로하다" },
  { chinese: "拿……来说", pinyin: "ná……lái shuō", meaning: "~으로 말하자면, ~의 경우에는" },
  { chinese: "主要", pinyin: "zhǔyào", meaning: "주로, 주요하다" },
  { chinese: "电视剧", pinyin: "diànshìjù", meaning: "드라마" },
  { chinese: "集", pinyin: "jí", meaning: "회, 편" },
  { chinese: "退休", pinyin: "tuìxiū", meaning: "은퇴하다" },
  { chinese: "打", pinyin: "dǎ", meaning: "마작, 트럼프 따위를 하다" },
  { chinese: "牌", pinyin: "pái", meaning: "카드" },
  { chinese: "麻将", pinyin: "májiàng", meaning: "마작" },
  { chinese: "教师", pinyin: "jiàoshī", meaning: "교사" },
  { chinese: "备课", pinyin: "bèi kè", meaning: "수업을 준비하다" },
  { chinese: "其他", pinyin: "qítā", meaning: "기타, 다른" },
  { chinese: "下载", pinyin: "xiàzài", meaning: "다운로드하다" },
  { chinese: "难道", pinyin: "nándào", meaning: "설마 ~하겠는가?" },
  { chinese: "歌曲", pinyin: "gēqǔ", meaning: "노래" },
  { chinese: "奇怪", pinyin: "qíguài", meaning: "이상하다, 의아하다" },
  { chinese: "相同", pinyin: "xiāngtóng", meaning: "똑같다, 서로 같다" },
  { chinese: "厨房", pinyin: "chúfáng", meaning: "주방" },
  { chinese: "书房", pinyin: "shūfáng", meaning: "서재" },
  { chinese: "静", pinyin: "jìng", meaning: "조용하다, 고요하다" },
  { chinese: "科学", pinyin: "kēxué", meaning: "과학적이다, 과학" },
  { chinese: "晒", pinyin: "shài", meaning: "햇볕을 쬐다" },
  { chinese: "阳台", pinyin: "yángtái", meaning: "베란다, 발코니" },
  { chinese: "建议", pinyin: "jiànyì", meaning: "제안하다, 건의하다" },
  { chinese: "自助餐", pinyin: "zìzhùcān", meaning: "뷔페" },
  { chinese: "葡萄酒", pinyin: "pútáojiǔ", meaning: "와인, 포도주" },
  { chinese: "白酒", pinyin: "báijiǔ", meaning: "바이주, 중국식 증류주" },
  { chinese: "醉", pinyin: "zuì", meaning: "취하다" },
  { chinese: "减肥", pinyin: "jiǎnféi", meaning: "다이어트하다, 살을 빼다" },
  { chinese: "笑话", pinyin: "xiàohua", meaning: "비웃다, 웃음거리" },
  { chinese: "身材", pinyin: "shēncái", meaning: "체격, 몸매" },
  { chinese: "口福", pinyin: "kǒufú", meaning: "먹을 복" },
  { chinese: "强", pinyin: "qiáng", meaning: "강하다, 낫다, 더 좋다" },
  { chinese: "坚持", pinyin: "jiānchí", meaning: "견지하다, 꾸준히 계속하다" },
  { chinese: "饮食", pinyin: "yǐnshí", meaning: "음식, 식생활" },
  { chinese: "中餐", pinyin: "Zhōngcān", meaning: "중국 음식" },
  { chinese: "非……不可", pinyin: "fēi……bùkě", meaning: "반드시 ~해야 한다" },
  { chinese: "刀", pinyin: "dāo", meaning: "칼, 나이프" },
  { chinese: "叉", pinyin: "chā", meaning: "포크" },
  { chinese: "左手", pinyin: "zuǒshǒu", meaning: "왼손" },
  { chinese: "右手", pinyin: "yòushǒu", meaning: "오른손" },
  { chinese: "切", pinyin: "qiē", meaning: "썰다, 자르다" },
  { chinese: "鸡", pinyin: "jī", meaning: "닭" },
  { chinese: "面条儿", pinyin: "miàntiáor", meaning: "면, 국수" },
  { chinese: "筷子", pinyin: "kuàizi", meaning: "젓가락" },
  { chinese: "冰箱", pinyin: "bīngxiāng", meaning: "냉장고" },
  { chinese: "牛奶", pinyin: "niúnǎi", meaning: "우유" },
  { chinese: "果汁", pinyin: "guǒzhī", meaning: "과일 주스" },
  { chinese: "豆浆", pinyin: "dòujiāng", meaning: "더우장, 콩 음료" },
  { chinese: "油条", pinyin: "yóutiáo", meaning: "여우탸오, 기름에 튀긴 음식" }
  ];

 const sentenceData = [
{
  chinese: "你今天怎么也回来晚了?",
  pinyin: "Nǐ jīntiān zěnme yě huílai wǎn le?",
  meaning: "당신 오늘 왜 이렇게 늦게 돌아왔어요?",
  words: ["你", "今天", "怎么", "也", "回来", "晚", "了"]
},
{
  chinese: "我来跟你一起做饭吧。",
  pinyin: "Wǒ lái gēn nǐ yìqǐ zuòfàn ba.",
  meaning: "내가 같이 식사 준비할게요.",
  words: ["我", "来", "跟", "你", "一起", "做饭", "吧"]
},
{
  chinese: "他们家又吵架了。",
  pinyin: "Tāmen jiā yòu chǎojià le.",
  meaning: "그 집 또 싸웠어요.",
  words: ["他们家", "又", "吵架", "了"]
},
{
  chinese: "他们为什么又吵了?",
  pinyin: "Tāmen wèishénme yòu chǎo le?",
  meaning: "왜 또 싸웠대요?",
  words: ["他们", "为什么", "又", "吵", "了"]
},
{
  chinese: "这就是张师傅不对了。",
  pinyin: "Zhè jiù shì Zhāng shīfu bú duì le.",
  meaning: "이건 장 씨가 잘못했네요.",
  words: ["这", "就是", "张师傅", "不对", "了"]
},
  {
    chinese: "两个人都上了一天的班，都挺累的，回到家，怎么能光让一个人干活儿呢?",
    pinyin: "Liǎng ge rén dōu shàng le yì tiān de bān, dōu tǐng lèi de, huí dào jiā, zěnme néng guāng ràng yí ge rén gàn huór ne?",
    meaning: "두 사람 다 하루 종일 일해서 피곤할 텐데, 집에 돌아와서 어떻게 한 사람만 일하게 할 수 있겠어요?"
  },
  {
    chinese: "他爱人叫张师傅帮着一起做，张师傅不做，结果把他爱人气哭了。",
    pinyin: "Tā àiren jiào Zhāng shīfu bāngzhe yìqǐ zuò, Zhāng shīfu bú zuò, jiéguǒ bǎ tā àiren qì kū le.",
    meaning: "아내가 장 씨에게 같이 하자고 했는데 장 씨가 안 해서, 결국 아내를 화나게 해서 울렸어요."
  },
  {
    chinese: "现在两个人怎么样了?",
    pinyin: "Xiànzài liǎng ge rén zěnmeyàng le?",
    meaning: "지금 두 사람은 어때요?"
  },
  {
    chinese: "我批评了张师傅，给他讲了男女在社会上要平等，在家庭中也要平等。",
    pinyin: "Wǒ pīpíng le Zhāng shīfu, gěi tā jiǎng le nánnǚ zài shèhuì shàng yào píngděng, zài jiātíng zhōng yě yào píngděng.",
    meaning: "내가 장 씨를 꾸짖고, 남녀는 사회에서도 평등해야 하고 가정에서도 평등해야 한다고 말해 줬어요."
  },
  {
    chinese: "又把咱们俩的经验介绍了一下儿。",
    pinyin: "Yòu bǎ zánmen liǎ de jīngyàn jièshào le yíxiàr.",
    meaning: "그리고 우리 둘의 경험도 좀 소개해 줬어요."
  },
  {
    chinese: "你没向他们夸夸我这个模范丈夫?",
    pinyin: "Nǐ méi xiàng tāmen kuākua wǒ zhège mófàn zhàngfu?",
    meaning: "당신, 그들에게 모범 남편인 나를 좀 칭찬하지 않았어요?"
  },
  {
    chinese: "正因为我夸了你，张师傅才改变了态度，向他爱人认了错，两个人一起高高兴兴地做了一顿饭。",
    pinyin: "Zhèng yīnwèi wǒ kuā le nǐ, Zhāng shīfu cái gǎibiàn le tàidu, xiàng tā àiren rèn le cuò, liǎng ge rén yìqǐ gāogāoxìngxìng de zuò le yí dùn fàn.",
    meaning: "바로 내가 당신을 칭찬했기 때문에 장 씨가 태도를 바꾸고, 아내에게 잘못을 인정하고, 두 사람이 즐겁게 함께 한 끼를 만들었어요."
  },
  {
    chinese: "希望他们俩今后再也不因为做家务的事吵架了。",
    pinyin: "Xīwàng tāmen liǎ jīnhòu zàiyě bù yīnwèi zuò jiāwù de shì chǎojià le.",
    meaning: "앞으로 그들이 다시는 집안일 하는 문제로 싸우지 않았으면 좋겠네요."
  },
  {
    chinese: "你劝架劝得不错嘛!",
    pinyin: "Nǐ quànjià quàn de búcuò ma!",
    meaning: "당신 아주 중재를 잘했네요!"
  },
  {
    chinese: "你把咱们俩刚结婚时我的表现也告诉他们了?",
    pinyin: "Nǐ bǎ zánmen liǎ gāng jiéhūn shí wǒ de biǎoxiàn yě gàosu tāmen le?",
    meaning: "당신, 우리가 막 결혼했을 때 내 모습도 그들에게 말해 줬어요?"
  },
  {
    chinese: "不说那些，经验从哪儿说起呀?",
    pinyin: "Bù shuō nàxiē, jīngyàn cóng nǎr shuō qǐ ya?",
    meaning: "그런 걸 말하지 않으면 경험을 어디서부터 말하겠어요?"
  },
  {
    chinese: "真不好意思，咱们俩的秘密全让人知道了。",
    pinyin: "Zhēn bù hǎoyìsi, zánmen liǎ de mìmì quán ràng rén zhīdao le.",
    meaning: "정말 부끄러워요, 우리 둘의 비밀이 다른 사람들에게 알려졌어요."
  },
  {
    chinese: "我昨天睡了十个小时觉。",
    pinyin: "Wǒ zuótiān shuì le shí ge xiǎoshí jiào.",
    meaning: "나는 어제 잠을 열 시간 잤다."
  },
  {
    chinese: "下班后他洗了澡。",
    pinyin: "Xiàbān hòu tā xǐ le zǎo.",
    meaning: "그는 퇴근 후에 샤워를 했다."
  },
  {
    chinese: "今天我请你客。",
    pinyin: "Jīntiān wǒ qǐng nǐ kè.",
    meaning: "오늘은 내가 밥을 살게."
  },
  {
    chinese: "我们要举行演讲比赛，帮我想想怎么讲。",
    pinyin: "Wǒmen yào jǔxíng yǎnjiǎng bǐsài, bāng wǒ xiǎngxiang zěnme jiǎng.",
    meaning: "우리 곧 웅변대회가 있는데, 내가 어떻게 말하면 좋을지 좀 생각해 줘."
  },
  {
    chinese: "演讲的题目是什么?",
    pinyin: "Yǎnjiǎng de tímù shì shénme?",
    meaning: "연설 주제가 뭔데?"
  },
  {
    chinese: "男女平等。",
    pinyin: "Nánnǚ píngděng.",
    meaning: "남녀평등."
  },
  {
    chinese: "这个问题很复杂，内容又太多，不好讲，你肯定有困难。",
    pinyin: "Zhège wèntí hěn fùzá, nèiróng yòu tài duō, bù hǎo jiǎng, nǐ kěndìng yǒu kùnnan.",
    meaning: "이 문제는 아주 복잡하고 내용도 너무 많아서 말하기 쉽지 않겠네. 너 분명 어려움이 있겠다."
  },
  {
    chinese: "所以才请你帮我想想嘛。",
    pinyin: "Suǒyǐ cái qǐng nǐ bāng wǒ xiǎngxiang ma.",
    meaning: "그러니까 네가 좀 생각해 달라고 하는 거지."
  },
  {
    chinese: "我不知道从哪儿讲起。",
    pinyin: "Wǒ bù zhīdao cóng nǎr jiǎng qǐ.",
    meaning: "나는 어디서부터 말을 시작해야 할지 모르겠어."
  },
  {
    chinese: "到处都有人谈男女平等，报上谈，电视里也谈。",
    pinyin: "Dàochù dōu yǒu rén tán nánnǚ píngděng, bàoshàng tán, diànshì lǐ yě tán.",
    meaning: "곳곳에서 남녀평등을 이야기해. 신문에서도 이야기하고, TV에서도 이야기하지."
  },
  {
    chinese: "谈来谈去，连一个最简单的问题也没谈清楚。",
    pinyin: "Tán lái tán qù, lián yí ge zuì jiǎndān de wèntí yě méi tán qīngchu.",
    meaning: "이야기를 하고 또 해도 가장 간단한 문제조차 분명히 설명하지 못했어."
  },
  {
    chinese: "什么问题?",
    pinyin: "Shénme wèntí?",
    meaning: "무슨 문제?"
  },
  {
    chinese: "一般人都以为男人能做的事女人也能做，好像就是实现了男女平等了。",
    pinyin: "Yìbān rén dōu yǐwéi nánrén néng zuò de shì nǚrén yě néng zuò, hǎoxiàng jiù shì shíxiàn le nánnǚ píngděng le.",
    meaning: "보통 사람들은 남자가 할 수 있는 일을 여자도 할 수 있으면, 마치 그게 곧 남녀평등이 실현된 것처럼 생각해."
  },
  {
    chinese: "你怎么认为呢?",
    pinyin: "Nǐ zěnme rènwéi ne?",
    meaning: "너는 어떻게 생각해?"
  },
  {
    chinese: "男人有男人的特点，女人有女人的特点，只在一点上讨论，那就太简单了。",
    pinyin: "Nánrén yǒu nánrén de tèdiǎn, nǚrén yǒu nǚrén de tèdiǎn, zhǐ zài yì diǎn shàng tǎolùn, nà jiù tài jiǎndān le.",
    meaning: "남자는 남자의 특징이 있고 여자는 여자의 특징이 있는데, 한 가지 점만 놓고 토론하는 건 너무 단순한 거야."
  },
  {
    chinese: "找来找去，没找到。",
    pinyin: "Zhǎo lái zhǎo qù, méi zhǎodào.",
    meaning: "이리저리 찾아도 찾지 못했다."
  },
  {
    chinese: "商量来商量去，他也不同意。",
    pinyin: "Shāngliang lái shāngliang qù, tā yě bù tóngyì.",
    meaning: "의논하고 또 해봐도 그는 역시 동의하지 않았다."
  },
  {
    chinese: "想来想去，怎么也想不起他叫什么名字。",
    pinyin: "Xiǎng lái xiǎng qù, zěnme yě xiǎng bu qǐ tā jiào shénme míngzi.",
    meaning: "생각하고 또 해봤지만, 어떻게 해도 그의 이름이 떠오르지 않는다."
  },
  {
    chinese: "他说来说去都是自己夸自己。",
    pinyin: "Tā shuō lái shuō qù dōu shì zìjǐ kuā zìjǐ.",
    meaning: "그는 이 말 저 말을 하지만 모두 다 자기 자랑이다."
  },
  {
    chinese: "今天他没来，我以为是他病了，后来才知道是他孩子病了。",
    pinyin: "Jīntiān tā méi lái, wǒ yǐwéi shì tā bìng le, hòulái cái zhīdao shì tā háizi bìng le.",
    meaning: "오늘 그가 오지 않아서 나는 그가 아픈 거라고 생각했는데, 나중에 알고 보니 그의 아이가 병이 났던 것이었다."
  },
  {
    chinese: "张师傅回到家一点活儿都不干，大家都认为这是不对的。",
    pinyin: "Zhāng shīfu huí dào jiā yìdiǎn huór dōu bù gàn, dàjiā dōu rènwéi zhè shì bú duì de.",
    meaning: "장 씨는 집에 돌아와서 일을 조금도 하지 않아서, 모두가 이것은 잘못이라고 생각한다."
  },
  {
    chinese: "今天路上车很多，我以为他不回来。",
    pinyin: "Jīntiān lùshang chē hěn duō, wǒ yǐwéi tā bù huílai.",
    meaning: "오늘 길에 차가 많아서 나는 그가 안 올 것이라고 생각했다."
  },
  {
    chinese: "孩子改不了爱吃糖的习惯，结果牙都坏了。",
    pinyin: "Háizi gǎi bù liǎo ài chī táng de xíguàn, jiéguǒ yá dōu huài le.",
    meaning: "아이가 단 것을 좋아하는 습관을 고치지 못해서 결국 이가 다 상했다."
  },
  {
    chinese: "他把约会的时间记错了，结果女朋友生气了。",
    pinyin: "Tā bǎ yuēhuì de shíjiān jì cuò le, jiéguǒ nǚpéngyou shēngqì le.",
    meaning: "그는 약속 시간을 잘못 기억해서 결국 여자친구가 화가 났다."
  },
  {
    chinese: "住的要好，吃的也要好。",
    pinyin: "Zhù de yào hǎo, chī de yě yào hǎo.",
    meaning: "사는 것도 좋아야 하고, 먹는 것도 좋아야 한다."
  },
  {
    chinese: "上班的路上要注意安全，下班的路上也要注意安全。",
    pinyin: "Shàngbān de lùshang yào zhùyì ānquán, xiàbān de lùshang yě yào zhùyì ānquán.",
    meaning: "출근길에도 안전에 주의해야 하고, 퇴근길에도 안전에 주의해야 한다."
  },
  {
    chinese: "教室里边要安静，教室外边也要安静。",
    pinyin: "Jiàoshì lǐbian yào ānjìng, jiàoshì wàibian yě yào ānjìng.",
    meaning: "교실 안도 조용해야 하고, 교실 밖도 조용해야 한다."
  },
  {
    chinese: "看来看去，一个都不喜欢。",
    pinyin: "Kàn lái kàn qù, yí ge dōu bù xǐhuan.",
    meaning: "보고 또 봐도 하나도 마음에 들지 않는다."
  },
  {
    chinese: "走来走去，又走回来了。",
    pinyin: "Zǒu lái zǒu qù, yòu zǒu huílai le.",
    meaning: "왔다 갔다 하다가 다시 돌아왔다."
  },
  {
    chinese: "讨论来讨论去，也没有好主意。",
    pinyin: "Tǎolùn lái tǎolùn qù, yě méiyǒu hǎo zhǔyi.",
    meaning: "토론하고 또 토론해도 좋은 생각이 없었다."
  },
  {
    chinese: "连他的名字也没想起来。",
    pinyin: "Lián tā de míngzi yě méi xiǎng qǐlai.",
    meaning: "그의 이름조차도 떠올리지 못했다."
  },
  {
    chinese: "连东南西北也不知道。",
    pinyin: "Lián dōng nán xī běi yě bù zhīdao.",
    meaning: "동서남북조차도 모른다."
  },
  {
    chinese: "连图书馆也没去过。",
    pinyin: "Lián túshūguǎn yě méi qù guo.",
    meaning: "도서관조차도 가 본 적이 없다."
  },
  {
    chinese: "我想找个干净勤劳的伴侣。",
    pinyin: "Wǒ xiǎng zhǎo ge gānjìng qínláo de bànlǚ.",
    meaning: "나는 깔끔하고 부지런한 배우자를 찾고 싶다."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];
let currentMode = "meaning";
let wrongAnswers = [];
const questionCount = 15;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz(mode) {
  currentMode = mode;
currentQuestionIndex = 0;
score = 0;
wrongAnswers = [];

  shuffledQuizData = shuffleArray([...quizData]).slice(0, questionCount);

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}

function getQuestionText(question) {
  if (currentMode === "meaning") {
    document.getElementById("mode-title").textContent = "중국어 단어의 뜻은?";
    return question.chinese;
  }

  if (currentMode === "pinyin") {
    document.getElementById("mode-title").textContent = "중국어 단어의 병음은?";
    return question.chinese;
  }

  if (currentMode === "chinese") {
    document.getElementById("mode-title").textContent = "이 뜻에 해당하는 중국어는?";
    return question.meaning;
  }

  if (currentMode === "sentenceMeaning") {
    document.getElementById("mode-title").textContent = "중국어 문장의 해석은?";
    return question.chinese;
  }

  if (currentMode === "sentenceChinese") {
    document.getElementById("mode-title").textContent = "이 해석에 해당하는 중국어 문장은?";
    return question.meaning;
  }
}
function getAnswerKey() {
  if (currentMode === "meaning") {
    return "meaning";
  }

  if (currentMode === "pinyin") {
    return "pinyin";
  }

  if (currentMode === "chinese") {
    return "chinese";
  }

  if (currentMode === "sentenceMeaning") {
    return "meaning";
  }

  if (currentMode === "sentenceChinese") {
    return "chinese";
  }
}
function showQuestion() {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("question").textContent = getQuestionText(currentQuestion);
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const choices = makeChoices(currentQuestion, answerKey);

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;

    button.onclick = function () {
      checkAnswer(choice);
    };

    choicesDiv.appendChild(button);
  });
}

function makeChoices(correctQuestion, answerKey) {
  let choices = [correctQuestion[answerKey]];

  let dataSource;

  const isSentenceQuestion = sentenceData.includes(correctQuestion);

  if (isSentenceQuestion) {
    dataSource = sentenceData;
  } else {
    dataSource = quizData;
  }

  const wrongChoices = dataSource
    .filter(item => item[answerKey] !== correctQuestion[answerKey])
    .map(item => item[answerKey]);

  const randomWrongChoices = shuffleArray(wrongChoices).slice(0, 3);

  choices = choices.concat(randomWrongChoices);

  return shuffleArray(choices);
}

function checkAnswer(answer) {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();
  const correctAnswer = currentQuestion[answerKey];
  const result = document.getElementById("result");

  if (answer === correctAnswer) {
  result.textContent = "정답입니다!";
  result.style.color = "blue";
  score++;
} else {
  result.textContent = `오답입니다. 정답은 ${correctAnswer}입니다.`;
  result.style.color = "red";

  wrongAnswers.push({
    question: getQuestionText(currentQuestion),
    selected: answer,
    correct: correctAnswer,
    chinese: currentQuestion.chinese,
    pinyin: currentQuestion.pinyin,
    meaning: currentQuestion.meaning
  });
}

  document.getElementById("score").textContent = `점수: ${score}`;

  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuizData.length) {
    if (currentMode === "order") {
      showOrderQuestion();
    } else {
      showQuestion();
    }
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("progress").textContent = "퀴즈 완료!";
  document.getElementById("mode-title").textContent = "결과";
  document.getElementById("question").textContent = "수고했어요!";
  document.getElementById("choices").innerHTML = "";

  let resultText = `총 ${shuffledQuizData.length}문제 중 ${score}문제를 맞혔습니다.`;

  if (wrongAnswers.length === 0) {
    resultText += "\n\n완벽해요! 틀린 문제가 없습니다.";
  } else {
    resultText += "\n\n[오답노트]\n";

    wrongAnswers.forEach((item, index) => {
      resultText += `\n${index + 1}. 문제: ${item.question}`;
      resultText += `\n내가 고른 답: ${item.selected}`;
      resultText += `\n정답: ${item.correct}`;
      resultText += `\n중국어: ${item.chinese}`;
      resultText += `\n병음: ${item.pinyin}`;
      resultText += `\n뜻: ${item.meaning}\n`;
    });
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("result").style.color = "black";

  document.getElementById("score").textContent =
    `최종 점수: ${score} / ${shuffledQuizData.length}`;

  const nextButton = document.getElementById("next-button");
  nextButton.textContent = "처음으로";
  nextButton.style.display = "block";

  nextButton.onclick = function () {
    goHome();
  };
}

function goHome() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("mode-box").style.display = "block";

  document.getElementById("result").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("score").textContent = "점수: 0";

  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";

 currentQuestionIndex = 0;
score = 0;
shuffledQuizData = [];
selectedWords = [];
currentOrderQuestion = null;
}
function startSentenceQuiz(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

  shuffledQuizData = shuffleArray([...sentenceData]).slice(0, Math.min(questionCount, sentenceData.length));

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}
let orderQuizData = [];
let selectedWords = [];
let currentOrderQuestion = null;

function startOrderQuiz() {
  currentMode = "order";
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

  orderQuizData = sentenceData.filter(item => item.words && item.words.length > 0);
  shuffledQuizData = shuffleArray([...orderQuizData]).slice(0, Math.min(questionCount, orderQuizData.length));

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showOrderQuestion();
}

function showOrderQuestion() {
  currentOrderQuestion = shuffledQuizData[currentQuestionIndex];
  selectedWords = [];

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("mode-title").textContent = "해석에 맞게 중국어 문장 순서 배열하기";
  document.getElementById("question").textContent = currentOrderQuestion.meaning;
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const selectedBox = document.createElement("div");
  selectedBox.id = "selected-words";
  selectedBox.textContent = "선택한 순서: ";
  choicesDiv.appendChild(selectedBox);

  const wordBox = document.createElement("div");
  wordBox.id = "word-buttons";
  choicesDiv.appendChild(wordBox);

  const mixedWords = shuffleArray([...currentOrderQuestion.words]);

  mixedWords.forEach(word => {
    const button = document.createElement("button");
    button.textContent = word;

    button.onclick = function () {
      selectedWords.push(word);
      button.disabled = true;
      updateSelectedWords();

      if (selectedWords.length === currentOrderQuestion.words.length) {
        checkOrderAnswer();
      }
    };

    wordBox.appendChild(button);
  });
}

function updateSelectedWords() {
  const selectedBox = document.getElementById("selected-words");
  selectedBox.textContent = "선택한 순서: " + selectedWords.join(" ");
}

function checkOrderAnswer() {
  const correctSentence = currentOrderQuestion.words.join("");
  const userSentence = selectedWords.join("");
  const result = document.getElementById("result");

  if (userSentence === correctSentence) {
    result.textContent = `정답입니다!\n${currentOrderQuestion.chinese}`;
    result.style.color = "blue";
    score++;
  } else {
    result.textContent =
      `오답입니다.\n정답: ${currentOrderQuestion.chinese}\n병음: ${currentOrderQuestion.pinyin}`;
    result.style.color = "red";

    wrongAnswers.push({
      question: currentOrderQuestion.meaning,
      selected: selectedWords.join(" "),
      correct: currentOrderQuestion.chinese,
      chinese: currentOrderQuestion.chinese,
      pinyin: currentOrderQuestion.pinyin,
      meaning: currentOrderQuestion.meaning
    });
  }

  document.getElementById("score").textContent = `점수: ${score}`;
  document.getElementById("next-button").style.display = "block";
}
