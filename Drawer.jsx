import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={740}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 90 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter user full name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Web Url"
                rules={[{ required: true, message: 'Please enter related url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="https://"
                  addonAfter=".org"
                  placeholder="Please enter valied url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="familyMemberName"
                label="Family Member Name"
                rules={[{ required: true, message: 'Please select Family Member Name' }]}
              >
                <Select placeholder="Please select Family Member Name">
                  <Option value="fam1">Fam 1</Option>
                  <Option value="mfam2ao">Fam 2</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="userType"
                label="User Type"
                rules={[{ required: true, message: 'Please choose the User Type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                  <Option value="govenment">Govenment</Option>
                  <Option value="international">International</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="mentor"
                label="Mentor"
                rules={[{ required: true, message: 'Please choose the Mentor' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="prof">Profesor</Option>
                  <Option value="lec">Lecture</Option>
                  <Option value="demo">Demo</Option>
                  <Option value="ind">Industrial</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTimeValue"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the date and Time' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter  description',
                  },
                ]}
              >
                <Input.TextArea rows={6} placeholder="please enter  description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default App;
