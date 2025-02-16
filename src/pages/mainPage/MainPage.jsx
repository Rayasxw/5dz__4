import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';

const MainPage = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState(null);
  const [value, setValue] = useState('');

  const onFinish = async (values) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFormSubmitStatus('success');
        setValue('');
      } else {
        setFormSubmitStatus('failure');
      }
    } catch (error) {
      setFormSubmitStatus('failure');
    }
  };
  console.log(value);
  

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={() => setFormSubmitStatus(null)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {formSubmitStatus === 'success' && <Alert message="Запрос успешно отправлен" type="success" showIcon />}
      {formSubmitStatus === 'failure' && <Alert message="Запрос провален!" type="error" showIcon />}
    </div>
  );
  
};

export default MainPage;