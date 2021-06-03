import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss'
import { CONST_TYPE, FROM_SELECT_TYPE, INIT_SELECT_FROM_LIST } from '../../../constants'
import { Table, Space, Button, Modal, Form, Select, Input } from 'antd'

const { Option } = Select
let ind = -1;

const FormSelect = ({ formData = [], setFormData, updateContent }) => {
  console.log(formData, "formData:")
  const [title, setTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  const FormRef = useRef({})
  const [tabList, setTableList] = useState([])
  const [record, setRecord] = useState({});
  const [formType, setFormType] = useState('')

  useEffect(() => {
    setTableList(formData)
  }, [formData])

  const stringify = str => {
    let json = "";
    try {
      json = JSON.stringify(str);
    } catch (error) {
      console.log(error);
      json = "";
    }
    return json;
  }

  useEffect(() => {
    if (FormRef.current && FormRef.current.setFieldsValue) {
      FormRef.current.setFieldsValue({
        ...record,
        option: stringify(record.option)
      });
    }
  }, [record])

  const columns = [
    {
      title: 'label',
      dataIndex: 'label',
      key: 'label',
      fixed: 'left',
      width: 100
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: 100,
    },
    {
      title: '筛选数据',
      dataIndex: 'option',
      key: 'option',
      render: option => stringify(option),
      width: 200,
    },
    {
      title: '字段名',
      dataIndex: 'fromName',
      key: 'fromName',
      width: 100,
    },
    {
      title: '是否模糊搜索',
      dataIndex: 'search',
      key: 'search',
      width: 150,
      render: search => <span>{search ? '是' : '否'}</span>,
    },
    {
      title: '模糊搜索数据接口',
      dataIndex: 'searchUrl',
      key: 'searchUrl',
      width: 200
    },
    {
      title: 'Action',
      key: 'action',
      width: 130,
      fixed: 'right',
      render: (text, record, index) => (
        <Space size="middle">
          <a onClick={() => showModal(CONST_TYPE.UPDATE, index, record)}>编辑</a>
          <a onClick={() => setFormData(null, index, 'del')}>删除</a>
        </Space>
      ),
    },
  ];

  const showModal = (type = '', index, record) => {
    if (modalVisible) {
      FormRef.current.resetFields(INIT_SELECT_FROM_LIST)
      setFormType('')
    }
    setModalVisible(!modalVisible);
    if (type === '') return;
    if (type === CONST_TYPE.ADD) {
      setTitle('添加筛选条件字段')
      return;
    }
    ind = index;
    setTitle('编辑筛选条件字段')
    record && record.type && record.type === 'Select' && setFormType('Select')
    setRecord(record);
  }

  const handleOk = () => {
    FormRef.current.submit();
  }

  const onFinish = values => {
    showModal();
    let option = null;
    try {
      const json = values.option ? (values.option[0] === '"' ? values.option : `"${values.option}"`) : '{}'
      option = JSON.parse(json)
    } catch (error) {
      console.log(error)
      option = {}
    }
    setFormData && setFormData({
      ...values,
      option
    }, ind)
    ind = -1;
  }

  const formTypeChange = val => {
    setFormType(val)
  }

  return (
    <div className={styles.select}>
      <h3>头部筛选条件</h3>
      <Button type="primary" onClick={() => showModal(CONST_TYPE.ADD)}>添加字段</Button>
      <Table
        columns={columns}
        dataSource={tabList || []}
        bordered
        rowKey="label"
        pagination={false}
        scroll={{ x: 260 }}
      />
      <Button type="primary" onClick={updateContent}>保存筛选数据</Button>
      <Modal
        title={title}
        visible={modalVisible}
        onCancel={showModal}
        onOk={handleOk}
      >
        <Form onFinish={onFinish} ref={FormRef}>
          <Form.Item
            label="label"
            name="label"
            rules={[{ required: true, message: 'Please input your label!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="类型"
            name="type"
            rules={[{ required: true, message: 'Please input your type!' }]}
          >
            <Select onChange={formTypeChange}>
              {
                FROM_SELECT_TYPE.map(item => {
                  return <Option key={item} value={item} >{item}</Option>
                })
              }
            </Select>
          </Form.Item>

          {
            formType === 'Select' ? (
              <>
                <Form.Item
                  label="下拉数据"
                  name="option"
                  rules={[{ required: true, message: 'Please input your fromName!' }]}
                >
                  <Input placeholder="可以是json数组或者url对象" />
                </Form.Item>
                <div>
                    例如 <br/>
                    数组： [ &#123; \"value\": 1 &#125; ]<br/>
                    对象： &#123; \"url\": \"www.baidu.com\",\"data\":\"res.content.list\",\"value\":\"name\",\"label\":\"code\" &#125;
                </div>
                <br/>
              </>
            ) : null
          }

          <Form.Item
            label="字段名称"
            name="fromName"
            rules={[{ required: true, message: 'Please input your fromName!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="是否模糊搜索"
            name="search"
            rules={[{ required: true, message: 'Please input your search!' }]}
          >
            <Select>
              <Option key='1' value={true} >是</Option>
              <Option key='2' value={false} >否</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="模糊搜索接口"
            name="searchUrl"
          >
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </div>
  )
}

export default FormSelect;
