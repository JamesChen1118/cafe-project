import { Form, Input, Button, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '登入失敗');
      }

      // 儲存 token 到 localStorage
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data));
      
      // 顯示成功訊息
      message.success({
        content: '登入成功！即將跳轉...',
        duration: 2,
        style: {
          marginTop: '20vh',
        },
      });

      // 淡出登入表單
      setIsVisible(false);
      
      // 延遲導航，讓動畫有時間完成
      setTimeout(() => {
        navigate('/');
      }, 1000);

    } catch (error) {
      message.error({
        content: error.message || '登入失敗，請檢查帳號密碼',
        style: {
          marginTop: '20vh',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-[#34495E]">
            登入 Cafe Hunter
          </h2>
          
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: '請輸入電子郵件' },
                { type: 'email', message: '請輸入有效的電子郵件' }
              ]}
            >
              <Input 
                prefix={<UserOutlined className="text-gray-400" />} 
                placeholder="電子郵件" 
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '請輸入密碼' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="密碼"
              />
            </Form.Item>

            <Form.Item>
              <Space className="w-full justify-between">
                <a className="text-[#E74C3C] hover:text-[#D44337]">
                  忘記密碼？
                </a>
                <a className="text-[#E74C3C] hover:text-[#D44337]">
                  註冊新帳號
                </a>
              </Space>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#E74C3C] hover:bg-[#D44337] border-none"
                loading={loading}
              >
                登 入
              </Button>
            </Form.Item>

            <div className="text-center text-gray-500">
              <span>或使用其他方式登入</span>
              <div className="mt-4 space-x-4">
                <Button shape="circle" size="large" icon={<UserOutlined />} />
                <Button shape="circle" size="large" icon={<UserOutlined />} />
              </div>
            </div>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login; 