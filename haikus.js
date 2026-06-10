// Haiku Daily — a curated pool of real, public-domain haiku by the classical
// Japanese masters, chosen for philosophical depth.
//
// Each entry has:
//   jp     — the original Japanese (public domain)
//   lines  — a faithful English rendering (written for this project, so as not
//            to reproduce any modern translator's copyrighted wording)
//   author — the poet who wrote the original
//   dates  — the poet's lifespan
//   kanji  — a single character evoking the poem's theme (watermark)
//   theme  — a short English theme label
//
// All poets here died long ago; their originals are in the public domain.
// To add more, append objects in the same shape and push to GitHub.

const HAIKUS = [
  { jp: "古池や蛙飛び込む水の音", lines: ["The old pond—", "a frog leaps in:", "the sound of water"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "静", theme: "stillness · the eternal now" },
  { jp: "旅に病んで夢は枯野をかけ廻る", lines: ["Sick on my journey,", "my dreams roam on and on", "over withered fields"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "夢", theme: "impermanence (his death poem)" },
  { jp: "夏草や兵どもが夢の跡", lines: ["Summer grasses—", "all that now remains", "of warriors' dreams"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "跡", theme: "the ruins of ambition" },
  { jp: "やがて死ぬけしきは見えず蝉の声", lines: ["Nothing in the cry", "of the cicada reveals", "how soon it must die"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "命", theme: "mortality, unsuspected" },
  { jp: "此の道や行く人なしに秋の暮", lines: ["This road—", "with no one walking it,", "autumn nightfall"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "道", theme: "solitude · the Way" },
  { jp: "閑さや岩にしみ入る蝉の声", lines: ["Such deep stillness—", "piercing into the rock,", "the cicada's cry"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "閑", theme: "stillness" },
  { jp: "枯朶に烏のとまりけり秋の暮", lines: ["On a withered branch", "a crow has settled down—", "autumn evening"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "寂", theme: "sabi · austere beauty" },
  { jp: "荒海や佐渡によこたふ天の河", lines: ["A wild, rough sea—", "and stretched toward Sado Isle,", "the River of Heaven"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "天", theme: "the vast and the small" },
  { jp: "稲妻にさとらぬ人の貴さよ", lines: ["How admirable—", "he who, seeing lightning,", "thinks not 'life is brief'"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "悟", theme: "wisdom past words" },
  { jp: "年々や猿に着せたる猿の面", lines: ["Year upon year,", "upon the monkey's face,", "a monkey's mask"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "面", theme: "the unchanging self" },
  { jp: "海暮れて鴨の声ほのかに白し", lines: ["The sea grows dark—", "and the wild ducks' faint cries", "are faintly white"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "闇", theme: "the edges of perception" },
  { jp: "秋深き隣は何をする人ぞ", lines: ["Autumn deepening—", "and the man next door,", "how does he live?"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "思", theme: "wondering at another's life" },
  { jp: "雲折々人を休める月見かな", lines: ["Now and again", "the clouds grant us rest", "from gazing at the moon"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "月", theme: "relief in interruption" },
  { jp: "京にても京なつかしや時鳥", lines: ["Even in Kyoto,", "hearing the cuckoo's call,", "I long for Kyoto"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "郷", theme: "longing within presence" },
  { jp: "初雪や水仙の葉のたわむまで", lines: ["First snow—", "just enough to bend", "the daffodil leaves"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "雪", theme: "fragile balance" },
  { jp: "淋しさを問てくれぬか桐一葉", lines: ["Won't you come and ask", "after this loneliness?—", "one paulownia leaf"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "葉", theme: "loneliness, offered" },
  { jp: "物言へば唇寒し秋の風", lines: ["Say but a word", "and the lips go cold—", "the autumn wind"], author: "Matsuo Bashō", dates: "1644–1694", kanji: "黙", theme: "the cost of speaking" },

  { jp: "露の世は露の世ながらさりながら", lines: ["This dewdrop world", "is but a world of dew—", "and yet… and yet…"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "露", theme: "grief and acceptance" },
  { jp: "蝸牛そろそろ登れ富士の山", lines: ["O snail,", "climb Mount Fuji—", "but slowly, slowly"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "歩", theme: "patience" },
  { jp: "世の中は地獄の上の花見かな", lines: ["In this our world", "we stroll the roof of hell", "and gaze at flowers"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "世", theme: "beauty over the abyss" },
  { jp: "やれ打つな蠅が手をすり足をする", lines: ["Do not strike the fly!—", "look, it wrings its hands,", "it wrings its feet"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "慈", theme: "compassion for the small" },
  { jp: "目出度さもちう位なりおらが春", lines: ["My New Year's fortune—", "only middling,", "for me and mine"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "足", theme: "humble contentment" },
  { jp: "我と来て遊べや親のない雀", lines: ["Come and play with me,", "little sparrow", "with no mother"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "孤", theme: "the orphan's kinship" },
  { jp: "ともかくもあなた任せの年の暮", lines: ["However it goes,", "I leave it all to you—", "the year's end"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "任", theme: "surrender · trust" },
  { jp: "雪とけて村いっぱいの子どもかな", lines: ["The snow melts away", "and the village overflows", "with children"], author: "Kobayashi Issa", dates: "1763–1828", kanji: "童", theme: "renewal" },

  { jp: "涼しさや鐘をはなるるかねの声", lines: ["Coolness—", "the bell's low voice", "leaving the bell"], author: "Yosa Buson", dates: "1716–1784", kanji: "鐘", theme: "the sound and its source" },
  { jp: "斧入れて香におどろくや冬木立", lines: ["Sinking the axe in,", "I start at the sudden scent—", "winter woods"], author: "Yosa Buson", dates: "1716–1784", kanji: "香", theme: "the shock of the real" },
  { jp: "春の海終日のたりのたりかな", lines: ["The sea in springtime,", "all the long day rising,", "falling, gently"], author: "Yosa Buson", dates: "1716–1784", kanji: "海", theme: "the rhythm of time" },
  { jp: "月天心貧しき町を通りけり", lines: ["The moon at zenith—", "and I pass on through", "a poor little town"], author: "Yosa Buson", dates: "1716–1784", kanji: "心", theme: "solitude under the moon" },
  { jp: "釣鐘にとまりて眠る胡蝶かな", lines: ["On the temple bell,", "settled there, asleep—", "a butterfly"], author: "Yosa Buson", dates: "1716–1784", kanji: "儚", theme: "peace upon the edge" },
  { jp: "行く我にとどまる汝に秋二つ", lines: ["I, going;", "you, staying—", "two autumns now"], author: "Yosa Buson", dates: "1716–1784", kanji: "別", theme: "parting" },

  { jp: "朝顔に釣瓶とられてもらひ水", lines: ["The morning glory", "has seized my well-bucket—", "I go to borrow water"], author: "Chiyo-ni", dates: "1703–1775", kanji: "生", theme: "reverence for life" },
  { jp: "蜻蛉釣り今日はどこまで行ったやら", lines: ["My dragonfly-hunter—", "how far, I wonder,", "has he gone today?"], author: "Chiyo-ni", dates: "1703–1775", kanji: "哀", theme: "a mother's grief" },

  { jp: "糸瓜咲て痰のつまりし仏かな", lines: ["The sponge-gourd blooms—", "and choked with phlegm,", "a Buddha I become"], author: "Masaoka Shiki", dates: "1867–1902", kanji: "仏", theme: "meeting death (his death poem)" },
  { jp: "柿くへば鐘が鳴るなり法隆寺", lines: ["I bite a persimmon—", "and a temple bell tolls:", "Hōryū-ji"], author: "Masaoka Shiki", dates: "1867–1902", kanji: "今", theme: "the fullness of a moment" },
  { jp: "秋風や我に神なし仏なし", lines: ["The autumn wind—", "for me there is no god,", "there is no Buddha"], author: "Masaoka Shiki", dates: "1867–1902", kanji: "風", theme: "facing the void alone" },
  { jp: "蜘蛛殺す後の淋しき夜寒かな", lines: ["Having killed a spider,", "how lonely the night turns,", "cold to the bone"], author: "Masaoka Shiki", dates: "1867–1902", kanji: "独", theme: "the weight of a small cruelty" },

  { jp: "盗人に取り残されし窓の月", lines: ["The thief", "left it behind—", "the moon at my window"], author: "Ryōkan", dates: "1758–1831", kanji: "無", theme: "what cannot be stolen" },

  { jp: "落花枝に帰ると見れば胡蝶かな", lines: ["A fallen blossom", "returning to its branch, I thought—", "but no, a butterfly"], author: "Arakida Moritake", dates: "1473–1549", kanji: "幻", theme: "illusion and seeing" },

  { jp: "名月や畳の上に松の影", lines: ["The harvest moon—", "and on the tatami mats,", "a pine tree's shadow"], author: "Takarai Kikaku", dates: "1661–1707", kanji: "影", theme: "presence and its shadow" },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = HAIKUS;
}
