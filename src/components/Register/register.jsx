import { Form, Input, Button, Modal, Space } from "antd";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";

const RegisterModal = ({ isOpen, onCancel, onFinish, showLoginModal }) => {
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
          註冊 Cafe Hunter
        </h2>
        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "請輸入使用者名稱" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="使用者名稱"
            />
          </Form.Item>

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
            rules={[
              { required: true, message: "請輸入密碼" },
              { min: 6, message: "密碼長度至少為 6 個字元" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="密碼"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "請確認密碼" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("兩次輸入的密碼不相符"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="確認密碼"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#E74C3C] hover:bg-[#D44337] border-none"
            >
              註冊
            </Button>
          </Form.Item>

          <div className="text-center text-gray-500">
            已經有帳號？
            <a
              className="text-[#E74C3C] hover:text-[#D44337] ml-2"
              onClick={showLoginModal}
            >
              立即登入
            </a>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
