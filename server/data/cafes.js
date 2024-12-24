const cafes = [
    {
        name: "Apple Museum Cafe",
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
        mrt: "科技大樓",
        description: "隱身在巷弄中的特色咖啡店，以復古路燈作為店內裝潢主題。提供精品咖啡與手作甜點，環境溫馨寧靜，很適合久坐。",
        businessHours: "週二至週日 12:00-20:00（週一公休）",
        address: "台北市大安區和平東路二段175巷48號",
        location: {
            type: "Point",
            coordinates: [121.5435, 25.0264]
        }
    },
    {
        name: "璞豆咖啡.日常",
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
        mrt: "古亭",
        description: "結合書店與咖啡廳的複合式空間，除了提供咖啡和輕食，還有精選書籍可以閱讀。空間寬敞舒適，是愛書人的最佳去處。",
        businessHours: "週二至週日 11:00-21:00（週一公休）",
        address: "台北市中正區羅斯福路二段164號",
        location: {
            type: "Point",
            coordinates: [121.5229, 25.0264]
        }
    },
    {
        name: "Block & Cafe. 町咖啡",
        mrt: "台北車站",
        description: "現代與傳統結合的設計，專注於精品咖啡與輕食選擇。提供溫馨的空間讓人能放鬆或進行工作。",
        businessHours: "週一至週日 08:00-20:00",
        address: "台北市中正區北門區周邊",
        location: {
            type: "Point",
            coordinates: [121.5199, 25.0485]
        }
    },
    {
        name: "行路 Walk Cafe",
        mrt: "古亭",
        description: "質樸風格的咖啡館，以放鬆與分享為主題，提供多樣咖啡選項與舒適座位。",
        businessHours: "週二至週日 10:00-19:00（週一公休）",
        address: "台北市大安區羅斯福路三段附近",
        location: {
            type: "Point",
            coordinates: [121.5283, 25.0228]
        }
    },
    {
        name: "白胖咖啡館",
        mrt: "中正紀念堂",
        description: "親切服務的小型咖啡館，特製甜點與多樣手沖咖啡是其特色。",
        businessHours: "週一至週日 09:00-18:00",
        address: "台北市中正區信義路二段",
        location: {
            type: "Point",
            coordinates: [121.5161, 25.0351]
        }
    },
    {
        name: "Dreamers Coffee Roasters",
        mrt: "象山",
        description: "提供優質咖啡豆及專業烘焙服務的咖啡館，環境清新且具設計感。",
        businessHours: "週一至週日 09:00-19:00",
        address: "台北市信義區松信路附近",
        location: {
            type: "Point",
            coordinates: [121.5645, 25.0321]
        }
    },
    {
        name: "街口6號珈啡",
        mrt: "龍山寺",
        description: "位於巷弄深處，特色飲品與手作甜點深受顧客喜愛的咖啡館。",
        businessHours: "週一至週日 10:00-18:00",
        address: "台北市萬華區華西街口",
        location: {
            type: "Point",
            coordinates: [121.4987, 25.0335]
        }
    },
    {
        name: "Hito Cafe",
        mrt: "南京三民",
        description: "簡約風格的小型咖啡館，主打精品咖啡及自製輕食。",
        businessHours: "週二至週日 09:00-18:00（週一公休）",
        address: "台北市松山區南京東路五段",
        location: {
            type: "Point",
            coordinates: [121.5589, 25.0498]
        }
    },
    {
        name: "未央咖啡店",
        mrt: "士林",
        description: "融合台灣特色與咖啡文化的咖啡店，提供多元咖啡選擇及特製甜點。",
        businessHours: "週二至週日 10:00-19:00（週一公休）",
        address: "台北市士林區中正路附近",
        location: {
            type: "Point",
            coordinates: [121.5256, 25.0938]
        }
    },
    {
        name: "Stoppage Time 補時",
        mrt: "雙連",
        description: "以運動為主題的咖啡館，提供舒適的空間與多樣的咖啡飲品選擇。",
        businessHours: "週二至週日 11:00-22:00（週一公休）",
        address: "台北市中山區中山北路一段附近",
        location: {
            type: "Point",
            coordinates: [121.5204, 25.0635]
        }
    },
    {
        name: "早秋咖啡 Cafe Macho",
        mrt: "信義安和",
        description: "結合質感與舒適的咖啡廳，供應特色咖啡及輕食。",
        businessHours: "週二至週日 09:00-20:00（週一公休）",
        address: "台北市大安區安和路二段",
        location: {
            type: "Point",
            coordinates: [121.5533, 25.0339]
        }
    },
    {
        name: "海子家珈琲",
        mrt: "大橋頭",
        description: "主打手沖單品咖啡與自家烘焙咖啡豆的小型咖啡館，空間親切且寧靜。",
        businessHours: "週一至週日 10:00-18:00",
        address: "台北市大同區迪化街一段",
        location: {
            type: "Point",
            coordinates: [121.5084, 25.0606]
        }
    },
    {
        name: "Moonshine Coffee Roasters",
        mrt: "市政府",
        description: "提供多樣精品咖啡選項，店內採現代工業風格，適合聚會或放鬆。",
        businessHours: "週二至週日 10:00-20:00（週一公休）",
        address: "台北市信義區松山路",
        location: {
            type: "Point",
            coordinates: [121.5675, 25.0412]
        }
    },
    {
        name: "Nearby Cafe 附近咖啡",
        mrt: "忠孝新生",
        description: "簡約舒適的空間設計，提供優質咖啡及輕食，是個放鬆的好選擇。",
        businessHours: "週二至週日 09:00-19:00（週一公休）",
        address: "台北市大安區建國南路",
        location: {
            type: "Point",
            coordinates: [121.5323, 25.0404]
        }
    },
    {
        name: "Cozy coffee 可集咖啡",
        mrt: "景美",
        description: "家庭風格的咖啡廳，提供各式咖啡飲品及輕食選擇，環境溫馨親切。",
        businessHours: "週一至週日 10:00-18:00",
        address: "台北市文山區景興路",
        location: {
            type: "Point",
            coordinates: [121.5419, 25.0012]
        }
    },
    {
        name: "建築珈琲",
        mrt: "石牌",
        description: "以建築書籍為特色的咖啡廳，融合咖啡與閱讀的空間。",
        businessHours: "週二至週日 10:00-20:00（週一公休）",
        address: "台北市北投區石牌路",
        location: {
            type: "Point",
            coordinates: [121.5156, 25.1148]
        }
    },
    {
        name: "言文字",
        mrt: "忠孝敦化",
        description: "結合文化與咖啡的空間，提供單品咖啡與文創商品。",
        businessHours: "週一至週日 09:00-19:00",
        address: "台北市大安區敦化南路",
        location: {
            type: "Point",
            coordinates: [121.5526, 25.0418]
        }
    },
    {
        name: "NOTCH 咖啡本町店",
        mrt: "中山",
        description: "精品咖啡專賣店，提供自家烘焙咖啡豆及多種單品咖啡。",
        businessHours: "週二至週日 10:00-18:00（週一公休）",
        address: "台北市中山區南京西路",
        location: {
            type: "Point",
            coordinates: [121.5183, 25.0524]
        }
    },
    {
        name: "水牛書店",
        mrt: "劍潭",
        description: "融合書店與咖啡廳，提供手作甜點及舒適閱讀空間。",
        businessHours: "週一至週日 09:00-20:00",
        address: "台北市士林區大南路",
        location: {
            type: "Point",
            coordinates: [121.5242, 25.0898]
        }
    },
    {
        "name": "PIQUE NIQUE Cafe 野餐咖啡館",
        "mrt": "中山",
        "description": "提供舒適的咖啡環境與輕食，適合與朋友聚會。",
        "businessHours": "週一至週日 10:00-18:00",
        "address": "台北市中山區",
        "location": {
            "type": "Point",
            "coordinates": [121.521, 25.0505]
        }
    },
    {
        "name": "啡創工廠 Future Factory",
        "mrt": "松江南京",
        "description": "創新特色咖啡館，結合藝術與咖啡文化，提供多樣咖啡選擇。",
        "businessHours": "週二至週日 09:00-18:00（週一公休）",
        "address": "台北市南京西路",
        "location": {
            "type": "Point",
            "coordinates": [121.5291, 25.0558]
        }
    },
    {
        "name": "草泥cafe",
        "mrt": "忠孝復興",
        "description": "環境清新，主打素食與手作甜點，適合放鬆的咖啡館。",
        "businessHours": "週一至週日 10:00-20:00",
        "address": "台北市大安區",
        "location": {
            "type": "Point",
            "coordinates": [121.5442, 25.0342]
        }
    },
    {
        "name": "The Misanthrope Society 厭世會社",
        "mrt": "台北車站",
        "description": "特色咖啡館，擁有復古的設計，結合書店與藝術展覽。",
        "businessHours": "週一至週日 09:30-18:30",
        "address": "台北市中正區",
        "location": {
            "type": "Point",
            "coordinates": [121.5155, 25.0427]
        }
    },
    {
        "name": "未央咖啡店",
        "mrt": "忠孝新生",
        "description": "專注於手沖咖啡及創意甜點，提供輕鬆愉悅的咖啡時光。",
        "businessHours": "週二至週日 08:30-19:00",
        "address": "台北市中正區",
        "location": {
            "type": "Point",
            "coordinates": [121.5210, 25.0350]
        }
    },
    {
        "name": "貝殼好室 BackerHouse",
        "mrt": "公館",
        "description": "以輕食和咖啡為主的復古風格小店，環境舒適。",
        "businessHours": "週一至週日 10:00-18:00",
        "address": "台北市文山區",
        "location": {
            "type": "Point",
            "coordinates": [121.5305, 25.0250]
        }
    },
    {
        "name": "城市草倉 C-tea loft",
        "mrt": "信義安和",
        "description": "結合茶飲和咖啡的創新空間，擁有時尚設計。",
        "businessHours": "週一至週日 09:00-20:00",
        "address": "台北市信義區",
        "location": {
            "type": "Point",
            "coordinates": [121.5775, 25.0345]
        }
    },
    {
        "name": "鳳咖啡 Phoenix Coffee & Tea",
        "mrt": "忠孝復興",
        "description": "提供精緻的咖啡及茶飲，適合商務會談或休憩。",
        "businessHours": "週二至週日 08:30-19:00",
        "address": "台北市大安區",
        "location": {
            "type": "Point",
            "coordinates": [121.5401, 25.0338]
        }
    },
    {
        "name": "靈感咖啡",
        "mrt": "東門",
        "description": "專注於手沖與單品咖啡，並提供獨特的咖啡體驗。",
        "businessHours": "週一至週日 10:00-17:00",
        "address": "台北市大安區",
        "location": {
            "type": "Point",
            "coordinates": [121.5315, 25.0330]
        }
    },
    {
        "name": "影響咖啡",
        "mrt": "士林",
        "description": "以創新的方式呈現精品咖啡，並結合音樂藝術。",
        "businessHours": "週二至週日 09:00-18:00",
        "address": "台北市士林區",
        "location": {
            "type": "Point",
            "coordinates": [121.5247, 25.0974]
        }
    },
    {
        "name": "JUR space 共享空間",
        "mrt": "松山",
        "description": "結合共享辦公空間與咖啡，提供創意及合作氛圍。",
        "businessHours": "週一至週五 09:00-18:00",
        "address": "台北市松山區",
        "location": {
            "type": "Point",
            "coordinates": [121.5732, 25.0523]
        }
    },
    {
        "name": "Aroma corner 馥隅",
        "mrt": "大安",
        "description": "提供各式咖啡及輕食，並有舒適的閱讀空間。",
        "businessHours": "週一至週日 09:00-19:00",
        "address": "台北市大安區",
        "location": {
            "type": "Point",
            "coordinates": [121.5398, 25.0353]
        }
    },
    {
        "name": "Think Cafe",
        "mrt": "中正紀念堂",
        "description": "融合創意與藝術的咖啡館，提供精緻的手工咖啡及輕食。",
        "businessHours": "週一至週日 09:00-18:00",
        "address": "台北市中正區",
        "location": {
            "type": "Point",
            "coordinates": [121.5205, 25.0341]
        }
    },
    {
        "name": "SENSE森式咖啡館",
        "mrt": "民權西路",
        "description": "主打單品咖啡與綠意空間，為咖啡愛好者提供平靜的環境。",
        "businessHours": "週一至週日 08:00-18:00",
        "address": "台北市大同區",
        "location": {
            "type": "Point",
            "coordinates": [121.5140, 25.0600]
        }
    }
];

export default cafes;