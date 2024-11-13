import { Form, Input, Button, Modal, Space } from "antd";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";

const LoginModal = ({ isOpen, onCancel, onFinish, showRegisterModal }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      closeIcon={
        <CloseOutlined className="text-gray-500 hover:text-[#E74C3C]" />
      }
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      className="login-modal"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#34495E]">
          登入 Cafe Hunter
        </h2>
        <Form name="login" onFinish={onFinish} layout="vertical" size="large">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "請輸入電子郵件" },
              { type: "email", message: "請輸入有效的電子郵件" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="電子郵件"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "請輸入密碼" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="密碼"
            />
          </Form.Item>

          <Form.Item>
            <Space className="w-full justify-between">
              <a className="text-[#E74C3C] hover:text-[#D44337]">忘記密碼？</a>
              <a
                className="text-[#E74C3C] hover:text-[#D44337]"
                onClick={showRegisterModal}
              >
                註冊新帳號
              </a>
            </Space>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#E74C3C] hover:bg-[#D44337] border-none"
            >
              登入
            </Button>
          </Form.Item>

          <div className="text-center text-gray-500">
            <span>或使用其他方式登入</span>
            <div className="mt-4 space-x-4">
              <Button shape="circle" icon={<UserOutlined />} />
              <Button shape="circle" icon={<UserOutlined />} />
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
