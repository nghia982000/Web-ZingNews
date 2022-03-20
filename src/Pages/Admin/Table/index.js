import React, { useEffect, useState } from 'react'
import {
    Table,
    Popconfirm,
    Space,
    Modal,
    Button,
    Form,
    Input,
    Spin,
    Breadcrumb,
    Select,
    notification
} from 'antd'
import {
    UploadOutlined,
    CloseCircleOutlined
} from "@ant-design/icons"
const { Option } = Select
const { TextArea } = Input
const AdData = ({
    getAllData,
    listData,
    loading,
    asynUpdateData,
    asynLoadDetailData,
    asynCreateData,
    asynDeleteData,
    name
}) => {
    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title', ellipsis: true },
        { title: 'Desciption', dataIndex: 'description', key: 'description', ellipsis: true },
        { title: 'Content', dataIndex: 'content', key: 'content', ellipsis: true },
        { title: 'Type', dataIndex: 'type', key: 'type' },
        { title: 'Image', dataIndex: 'img', key: 'img', ellipsis: true },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => (
                <Space size="middle">
                    <button onClick={() => openModal(record.id)} >Edit</button>
                    <Popconfirm
                        title="Sinh viên này sẽ bị xóa vĩnh viễn"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <button>Delete</button>
                    </Popconfirm>
                </Space>

            )
        },
    ]
    const [statusForm, setStatusForm] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [formModal] = Form.useForm()
    useEffect(() => {
        console.log('Event')
        getAllData()
    }, [])
    const onFinish = async (values) => {
        console.log(statusForm)
        if (statusForm) {
            const data = await asynUpdateData(values)
            console.log(data)
            if (data) {
                getAllData()
            }
        }
        else {
            const data = await asynCreateData(values)
            console.log(data)
            if (data) {
                getAllData()
            }
        }
        handleCancel()
    }

    const createData = () => {
        setStatusForm(false)
        formModal.resetFields()
        formModal.setFieldsValue({
            id: Math.random().toString(36).substr(2, 5),
        })
        showModal()
    }
    const openModal = async (id) => {
        console.log('edit')
        const response = await asynLoadDetailData(id)
        console.log(response)
        if (response) {
            formModal.setFieldsValue({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                content: response.data.content,
                type: response.data.type,
                img: response.data.img
            })
        }
        setStatusForm(true)
        showModal()
    }
    const handleDelete = async (id) => {
        console.log('delete')
        const data = await asynDeleteData(id)
        if (data) {
            getAllData()
        }
    }
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = ""
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                baseURL = reader.result
                resolve(baseURL)
            }
        })
    }
    const handleFileInputChange = e => {
        console.log(e.target.files[0].size)
        if (e.target.files[0].size <= 52000) {
            getBase64(e.target.files[0])
                .then(result => {
                    formModal.setFieldsValue({
                        img: result
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            return
        }
        notification.open({
            message: 'Tải ảnh thất bại',
            description: 'Ảnh có kích thước lớn hơn 55kb',
            icon: <CloseCircleOutlined style={{ color: "red" }} />,
        })

    }
    return (
        <>

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>{name}</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" onClick={createData}>Add Student</Button>
            <Table
                columns={columns}
                dataSource={listData}
                pagination={{ defaultPageSize: 7 }}
            />
            <Modal
                width={1000}
                title={(statusForm) ? `Edit ${name}` : `Add ${name}`}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={
                    <Button type="primary" htmlType="submit" form="formModal">
                        Save
                    </Button>}
            >
                <Form
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}
                    form={formModal}
                    name="formModal"
                    onFinish={onFinish}
                >
                    <Form.Item name="id" label="id" >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item name="title" label="Title" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tiêu đề'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mô tả'
                        },

                    ]}
                        hasFeedback
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item name="content" label="Content" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập số nội dung'
                        }
                    ]}
                        hasFeedback
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Upload">
                        <Input type="file" name="file" id="file" onChange={(e) => handleFileInputChange(e)} hidden />
                        <label htmlFor="file" style={{ border: '1px solid #dddddd', padding: '5px', cursor: 'pointer' }}>
                            <UploadOutlined />
                            Tải ảnh lên
                        </label>
                    </Form.Item>
                    <Form.Item name="img" label="Image" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập url hình ảnh'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input disabled />
                    </Form.Item>
                    {
                        (name === 'News')
                            ? (
                                <Form.Item
                                    name="type"
                                    label="Type"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập type'
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select
                                        placeholder="Chọn type"
                                        allowClear
                                    >
                                        <Option value="right">Right</Option>
                                        <Option value="left">Left</Option>
                                        <Option value="center">Center</Option>
                                    </Select>
                                </Form.Item>
                            )
                            : (
                                <Form.Item
                                    name="type"
                                    label="Type"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập type'
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select
                                        placeholder="Chọn type"
                                        allowClear
                                    >
                                        <Option value="top">Top</Option>
                                        <Option value="bottom">Bottom</Option>
                                    </Select>
                                </Form.Item>
                            )
                    }
                </Form>
            </Modal>
            {loading && (
                <div className="loading">
                    <Spin size="large" />
                </div>
            )
            }
        </>
    )
}
export default AdData
