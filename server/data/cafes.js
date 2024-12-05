const cafes = [
    {
        name: "Apple Museum Cafe",
        district: "大安區",
        mrt: "科技大樓",
        description: "以蘋果電腦為主題的博物館咖啡廳，店內擺設許多具收藏價值的蘋果產品，從早期的 Macintosh 到 iMac 都有，是科技迷和蘋果迷朝聖必訪的特色咖啡廳。",
        businessHours: "週二至週日 11:00-19:00（週一公休）",
        address: "台北市大安區和平東路二段96巷15弄26號",
        location: {
            type: "Point",
            coordinates: [121.5435, 25.0261]
        }
    },
    {
        name: "喜鵲咖啡",
        district: "大安區",
        mrt: "大安森林公園",
        description: "位於大安區巷弄內的溫馨咖啡廳，主打手沖咖啡與手作甜點。店內空間寬敞舒適，採光良好，是個適合工作與讀書的寧靜空間。",
        businessHours: "週二至週日 09:00-18:00（週一公休）",
        address: "台北市大安區和平東路二段118巷2號",
        location: {
            type: "Point",
            coordinates: [121.5346, 25.0264]
        }
    },
    {
        name: "聞山咖啡台大店",
        district: "大安區",
        mrt: "公館",
        description: "位於台大校園周邊的人氣咖啡廳，以自家烘焙咖啡豆聞名。店內提供多種單品咖啡，環境簡約現代，是學生與上班族喜愛的工作讀書空間。",
        businessHours: "週一至週日 08:00-22:00",
        address: "台北市大安區羅斯福路四段1號台大第二學生活動中心1樓",
        location: {
            type: "Point",
            coordinates: [121.5347, 25.0197]
        }
    },
    {
        name: "亞舍咖啡",
        district: "中正區",
        mrt: "古亭",
        description: "充滿日式風格的咖啡店，環境清幽，假日採限時2小時制。提供優質咖啡與輕食，店內擺設簡約精緻，是個適合放鬆的好去處。",
        businessHours: "週二至週日 11:00-19:00（週一公休）假日限時2小時",
        address: "台北市中正區羅斯福路二段錦華街口",
        location: {
            type: "Point",
            coordinates: [121.5229, 25.0261]
        }
    },
    {
        name: "路燈咖啡",
        district: "大安區",
        mrt: "科技大樓",
        description: "隱身在巷弄中的特色咖啡店，以復古路燈作為店內裝���主題。提供精品咖啡與手作甜點，環境溫馨寧靜，很適合久坐。",
        businessHours: "週二至週日 12:00-20:00（週一公休）",
        address: "台北市大安區和平東路二段175巷48號",
        location: {
            type: "Point",
            coordinates: [121.5435, 25.0264]
        }
    },
    {
        name: "璞豆咖啡.日常",
        district: "中正區",
        mrt: "東門",
        description: "位於東門市場附近的質感咖啡店，主打手沖咖啡與手作甜點。空間設計簡約現代，充滿生活感，是個適合放鬆的所在。",
        businessHours: "週二至週日 10:00-18:00（週一公休）",
        address: "台北市中正區金山南路一段與金山南路一段129巷交叉路口",
        location: {
            type: "Point",
            coordinates: [121.5271, 25.0333]
        }
    },
    {
        name: "書屋花甲Ｘ而立書店",
        district: "中正區",
        mrt: "古亭",
        description: "結合書店與咖啡廳的複合式空間，除了提供咖啡和輕食，還有精選書籍可以閱讀。空間寬敞舒適，是愛書人的最佳去處。",
        businessHours: "週二至週日 11:00-21:00（週一公休）",
        address: "台北市中正區羅斯福路二段164號",
        location: {
            type: "Point",
            coordinates: [121.5229, 25.0264]
        }
    }
];

export default cafes;