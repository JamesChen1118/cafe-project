import { Card, Divider, Tag, Input, Button, Tabs } from "antd";
import { useState } from "react";
import {
  PlusOutlined,
  UserOutlined,
  HeartOutlined,
  TagsOutlined,
} from "@ant-design/icons";

const Member = () => {
  // 模擬用戶資料
  const [userData] = useState({
    username: "咖啡愛好者",
    email: "coffee@example.com",
    favorites: [
      { id: 1, name: "星巴克 信義門市", tags: ["不限時", "插座多"] },
      { id: 2, name: "路易莎 台大店", tags: ["安靜", "平價"] },
      { id: 3, name: "cama café 公館店", tags: ["咖啡好喝", "環境好"] },
    ],
  });

  // 標籤管理
  const [tags, setTags] = useState([
    "不限時",
    "插座多",
    "安靜",
    "平價",
    "咖啡好喝",
    "環境好",
  ]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // 新增標籤
  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
    setInputVisible(false);
  };

  // 定義頁籤內容
  const items = [
    {
      key: "1",
      label: (
        <span>
          <UserOutlined />
          會員資料
        </span>
      ),
      children: (
        <Card className="shadow-md">
          <p className="mb-4">
            <span className="font-bold mr-2">使用者名稱:</span>
            {userData.username}
          </p>
          <p>
            <span className="font-bold mr-2">電子郵件:</span>
            {userData.email}
          </p>
        </Card>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <HeartOutlined />
          收藏清單
        </span>
      ),
      children: (
        <Card className="shadow-md">
          {userData.favorites.map((cafe) => (
            <div key={cafe.id} className="mb-4 last:mb-0">
              <h3 className="text-lg font-medium mb-2">{cafe.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cafe.tags.map((tag) => (
                  <Tag key={tag} color="orange">
                    {tag}
                  </Tag>
                ))}
              </div>
              <Divider />
            </div>
          ))}
        </Card>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <TagsOutlined />
          標籤管理
        </span>
      ),
      children: (
        <Card className="shadow-md">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Tag
                key={tag}
                closable
                onClose={() => setTags(tags.filter((t) => t !== tag))}
                color="orange"
              >
                {tag}
              </Tag>
            ))}
          </div>

          {inputVisible ? (
            <Input
              type="text"
              size="small"
              style={{ width: 100 }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleAddTag}
              onPressEnter={handleAddTag}
              autoFocus
            />
          ) : (
            <Button
              type="dashed"
              onClick={() => setInputVisible(true)}
              icon={<PlusOutlined />}
            >
              新增標籤
            </Button>
          )}
        </Card>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs
        defaultActiveKey="1"
        items={items}
        type="card"
        className="bg-white p-4 rounded-lg shadow-md"
      />
    </div>
  );
};

export default Member;
