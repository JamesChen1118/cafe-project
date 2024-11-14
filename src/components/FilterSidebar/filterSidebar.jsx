import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Select, Space, Button, Divider, Switch } from "antd";

const { Option, OptGroup } = Select;

const FilterSidebar = ({ isOpen, onClose }) => {
  // 台北市分區選項
  const districts = [
    { value: "zhongzheng", label: "中正區" },
    { value: "datong", label: "大同區" },
    { value: "zhongshan", label: "中山區" },
    { value: "songshan", label: "松山區" },
    { value: "daan", label: "大安區" },
    { value: "wanhua", label: "萬華區" },
    { value: "xinyi", label: "信義區" },
    { value: "shilin", label: "士林區" },
    { value: "beitou", label: "北投區" },
    { value: "neihu", label: "內湖區" },
    { value: "nangang", label: "南港區" },
    { value: "wenshan", label: "文山區" },
  ];

  // 捷運路線配置 - 完整的站點數據
  const mrtLines = {
    文湖線: {
      value: "brown",
      stations: [
        { value: "動物園", label: "動物園" },
        { value: "木柵", label: "木柵" },
        { value: "萬芳社區", label: "萬芳社區" },
        { value: "萬芳醫院", label: "萬芳醫院" },
        { value: "辛亥", label: "辛亥" },
        { value: "麟光", label: "麟光" },
        { value: "六張犁", label: "六張犁" },
        { value: "科技大樓", label: "科技大樓" },
        { value: "大安", label: "大安" },
        { value: "忠孝復興", label: "忠孝復興" },
        { value: "南京復興", label: "南京復興" },
        { value: "中山國中", label: "中山國中" },
        { value: "松山機場", label: "松山機場" },
        { value: "大直", label: "大直" },
        { value: "劍南路", label: "劍南路" },
        { value: "西湖", label: "西湖" },
        { value: "港墘", label: "港墘" },
        { value: "文德", label: "文德" },
        { value: "內湖", label: "內湖" },
        { value: "大湖公園", label: "大湖公園" },
        { value: "葫洲", label: "葫洲" },
        { value: "東湖", label: "東湖" },
        { value: "南港軟體園區", label: "南港軟體園區" },
        { value: "南港展覽館", label: "南港展覽館" },
      ],
    },
    淡水信義線: {
      value: "red",
      stations: [
        { value: "淡水", label: "淡水" },
        { value: "紅樹林", label: "紅樹林" },
        { value: "竹圍", label: "竹圍" },
        { value: "關渡", label: "關渡" },
        { value: "忠義", label: "忠義" },
        { value: "復興崗", label: "復興崗" },
        { value: "北投", label: "北投" },
        { value: "奇岩", label: "奇岩" },
        { value: "唭哩岸", label: "唭哩岸" },
        { value: "石牌", label: "石牌" },
        { value: "明德", label: "明德" },
        { value: "芝山", label: "芝山" },
        { value: "士林", label: "士林" },
        { value: "劍潭", label: "劍潭" },
        { value: "圓山", label: "圓山" },
        { value: "民權西路", label: "民權西路" },
        { value: "雙連", label: "雙連" },
        { value: "中山", label: "中山" },
        { value: "台北車站", label: "台北車站" },
        { value: "台大醫院", label: "台大醫院" },
        { value: "中正紀念堂", label: "中正紀念堂" },
        { value: "東門", label: "東門" },
        { value: "大安森林公園", label: "大安森林公園" },
        { value: "大安", label: "大安" },
        { value: "信義安和", label: "信義安和" },
        { value: "台北101/世貿", label: "台北101/世貿" },
        { value: "象山", label: "象山" },
      ],
    },
    松山新店線: {
      value: "green",
      stations: [
        { value: "新店", label: "新店" },
        { value: "新店區公所", label: "新店區公所" },
        { value: "七張", label: "七張" },
        { value: "小碧潭", label: "小碧潭" },
        { value: "大坪林", label: "大坪林" },
        { value: "景美", label: "景美" },
        { value: "萬隆", label: "萬隆" },
        { value: "公館", label: "公館" },
        { value: "台電大樓", label: "台電大樓" },
        { value: "古亭", label: "古亭" },
        { value: "中正紀念堂", label: "中正紀念堂" },
        { value: "小南門", label: "小南門" },
        { value: "西門", label: "西門" },
        { value: "北門", label: "北門" },
        { value: "中山", label: "中山" },
        { value: "松江南京", label: "松江南京" },
        { value: "南京復興", label: "南京復興" },
        { value: "台北小巨蛋", label: "台北小巨蛋" },
        { value: "南京三民", label: "南京三民" },
        { value: "松山", label: "松山" },
      ],
    },
    中和新蘆線: {
      value: "orange",
      stations: [
        { value: "蘆洲", label: "蘆洲" },
        { value: "三民高中", label: "三民高中" },
        { value: "徐匯中學", label: "徐匯中學" },
        { value: "三和國中", label: "三和國中" },
        { value: "三重國小", label: "三重國小" },
        { value: "大橋頭", label: "大橋頭" },
        { value: "台北橋", label: "台北橋" },
        { value: "菜寮", label: "菜寮" },
        { value: "三重", label: "三重" },
        { value: "先嗇宮", label: "先嗇宮" },
        { value: "頭前庄", label: "頭前庄" },
        { value: "新莊", label: "新莊" },
        { value: "輔大", label: "輔大" },
        { value: "丹鳳", label: "丹鳳" },
        { value: "迴龍", label: "迴龍" },
        { value: "三重", label: "三重" },
        { value: "國北", label: "國北" },
        { value: "民權西路", label: "民權西路" },
        { value: "中山國小", label: "中山國小" },
        { value: "行天宮", label: "行天宮" },
        { value: "松江南京", label: "松江南京" },
        { value: "忠孝新生", label: "忠孝新生" },
        { value: "東門", label: "東門" },
        { value: "古亭", label: "古亭" },
        { value: "頂溪", label: "頂溪" },
        { value: "永安市場", label: "永安市場" },
        { value: "景安", label: "景安" },
        { value: "南勢角", label: "南勢角" },
      ],
    },
    板南線: {
      value: "blue",
      stations: [
        { value: "頂埔", label: "頂埔" },
        { value: "永寧", label: "永寧" },
        { value: "土城", label: "土城" },
        { value: "海山", label: "海山" },
        { value: "亞東醫院", label: "亞東醫院" },
        { value: "府中", label: "府中" },
        { value: "板橋", label: "板橋" },
        { value: "新埔", label: "新埔" },
        { value: "江子翠", label: "江子翠" },
        { value: "龍山寺", label: "龍山寺" },
        { value: "西門", label: "西門" },
        { value: "台北車站", label: "台北車站" },
        { value: "善導寺", label: "善導寺" },
        { value: "忠孝新生", label: "忠孝新生" },
        { value: "忠孝復興", label: "忠孝復興" },
        { value: "忠孝敦化", label: "忠孝敦化" },
        { value: "國父紀念館", label: "國父紀念館" },
        { value: "市政府", label: "市政府" },
        { value: "永春", label: "永春" },
        { value: "後山埤", label: "後山埤" },
        { value: "昆陽", label: "昆陽" },
        { value: "南港", label: "南港" },
        { value: "南港展覽館", label: "南港展覽館" },
      ],
    },
    環狀線: {
      value: "yellow",
      stations: [
        { value: "大坪林", label: "大坪林" },
        { value: "十四張", label: "十四張" },
        { value: "秀朗橋", label: "秀朗橋" },
        { value: "景平", label: "景平" },
        { value: "景安", label: "景安" },
        { value: "中和", label: "中和" },
        { value: "橋和", label: "橋和" },
        { value: "中原", label: "中原" },
        { value: "板新", label: "板新" },
        { value: "板橋", label: "板橋" },
        { value: "新埔民生", label: "新埔民生" },
        { value: "頭前庄", label: "頭前庄" },
        { value: "幸福", label: "幸福" },
        { value: "新北產業園區", label: "新北產業園區" },
      ],
    },
  };

  // 營業資訊選項
  const businessInfo = [
    { key: "isOpen", label: "目前營業中", value: false },
    { key: "noTimeLimit", label: "不限時", value: false },
  ];

  // 餐點類型選項
  const foodTypes = [
    { value: "coffee", label: "咖啡" },
    { value: "dessert", label: "甜點" },
    { value: "meal", label: "正餐" },
    { value: "brunch", label: "早午餐" },
  ];

  // 設施選項
  const facilities = [
    { value: "wifi", label: "WiFi" },
    { value: "socket", label: "插座" },
    { value: "quiet", label: "安靜空間" },
    { value: "smoking", label: "禁菸" },
    { value: "pet", label: "寵物友善" },
    { value: "parking", label: "停車場" },
  ];

  // 添加狀態管理
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [businessSettings, setBusinessSettings] = useState({
    isOpen: false,
    noTimeLimit: false,
  });

  const handleDistrictChange = (values) => {
    setSelectedDistricts(values);
  };

  const handleStationChange = (values) => {
    setSelectedStations(values);
  };

  const handleFoodTypeChange = (values) => {
    setSelectedFoodTypes(values);
  };

  const handleFacilityChange = (values) => {
    setSelectedFacilities(values);
  };

  const handleBusinessChange = (key) => (checked) => {
    setBusinessSettings((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  const handleReset = () => {
    setSelectedDistricts([]);
    setSelectedStations([]);
    setSelectedFoodTypes([]);
    setSelectedFacilities([]);
    setBusinessSettings({
      isOpen: false,
      noTimeLimit: false,
    });
  };

  const handleApply = () => {
    const filters = {
      districts: selectedDistricts,
      stations: selectedStations,
      foodTypes: selectedFoodTypes,
      facilities: selectedFacilities,
      business: businessSettings,
    };
    console.log("Applied filters:", filters);
    onClose();
  };

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    return (
      <span className="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-800 mr-1 mb-1">
        {label}
        {closable && (
          <span className="ml-1 cursor-pointer" onClick={onClose}>
            ×
          </span>
        )}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-20 z-[1001]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 bottom-12 w-80 bg-white shadow-lg z-[1002]"
          >
            <div className="p-4 h-full overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-gray-700 font-medium">地區搜尋</h4>
                  <Space direction="vertical" className="w-full">
                    <Select
                      value={selectedDistricts}
                      onChange={handleDistrictChange}
                      placeholder="選擇行政區"
                      className="w-full"
                      allowClear
                      mode="multiple"
                      tagRender={tagRender}
                      style={{ minHeight: "32px" }}
                      dropdownStyle={{ maxHeight: "400px" }}
                    >
                      {districts.map((district) => (
                        <Option key={district.value} value={district.value}>
                          {district.label}
                        </Option>
                      ))}
                    </Select>
                    <Select
                      value={selectedStations}
                      onChange={handleStationChange}
                      placeholder="選擇捷運站"
                      className="w-full"
                      allowClear
                      mode="multiple"
                      tagRender={tagRender}
                      style={{ minHeight: "32px" }}
                      dropdownStyle={{ maxHeight: "400px" }}
                    >
                      {Object.entries(mrtLines).map(([line, { stations }]) => (
                        <OptGroup label={line} key={line}>
                          {stations.map((station) => (
                            <Option key={station.value} value={station.value}>
                              {station.label}
                            </Option>
                          ))}
                        </OptGroup>
                      ))}
                    </Select>
                  </Space>
                </div>

                <Divider style={{ margin: "12px 0" }} />

                <div>
                  <h4 className="mb-2 text-gray-700 font-medium">營業資訊</h4>
                  <Space direction="vertical" className="w-full">
                    {businessInfo.map((item) => (
                      <div
                        key={item.key}
                        className="flex justify-between items-center"
                      >
                        <span>{item.label}</span>
                        <Switch
                          size="small"
                          checked={businessSettings[item.key]}
                          onChange={handleBusinessChange(item.key)}
                        />
                      </div>
                    ))}
                  </Space>
                </div>

                <Divider style={{ margin: "12px 0" }} />

                <div>
                  <h4 className="mb-2 text-gray-700 font-medium">餐點類型</h4>
                  <Select
                    value={selectedFoodTypes}
                    onChange={handleFoodTypeChange}
                    placeholder="選擇餐點類型"
                    className="w-full"
                    allowClear
                    mode="multiple"
                    tagRender={tagRender}
                    style={{ minHeight: "32px" }}
                    dropdownStyle={{ maxHeight: "400px" }}
                  >
                    {foodTypes.map((type) => (
                      <Option key={type.value} value={type.value}>
                        {type.label}
                      </Option>
                    ))}
                  </Select>
                </div>

                <Divider style={{ margin: "12px 0" }} />

                <div>
                  <h4 className="mb-2 text-gray-700 font-medium">其他設施</h4>
                  <Select
                    value={selectedFacilities}
                    onChange={handleFacilityChange}
                    placeholder="選擇設施"
                    className="w-full"
                    allowClear
                    mode="multiple"
                    tagRender={tagRender}
                    style={{ minHeight: "32px" }}
                    dropdownStyle={{ maxHeight: "400px" }}
                  >
                    {facilities.map((facility) => (
                      <Option key={facility.value} value={facility.value}>
                        {facility.label}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="sticky bottom-4 left-4 right-4 pt-4 bg-white">
                  <Space className="w-full justify-between">
                    <Button onClick={handleReset}>重置</Button>
                    <Button type="primary" onClick={handleApply}>
                      套用
                    </Button>
                  </Space>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterSidebar;
