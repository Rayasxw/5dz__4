import React, { useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../../redux/actions/action';
import { types } from '../../redux/types/types';

const MainPage = () => {
  const dispatch = useDispatch();
  const formSubmitStatus = useSelector((state) => state.usersReducer.formSumbitStatus);

  
  const onFinish = (data) => {
    dispatch(submitForm(data));
  };

  
  useEffect(() => {
    if (formSubmitStatus) {
      setTimeout(() => {
        dispatch({ type: types.RESET_FORM_SUBMIT_STATUS });
      }, 3000);
    }
  }, [formSubmitStatus, dispatch]);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
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