import React from 'react';
import { Layout, Divider, List } from 'antd';
import { GrArticle } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { FaUserFriends, FaFacebookMessenger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NewFeed from './Newfeed.jsx';

function Main() {
    const { Content, Sider } = Layout;
    const yearNow = new Date().getFullYear();

    return (
        <>
            <Content style={{ padding: '0 50px', marginTop: '65px' }}>
                <div className="container mt-2 mb-2">
                    <Layout >
                        <Sider width="200" >
                            <div style={{ position: "fixed" }}>
                                <List>
                                    <List.Item className="box-info-sider-left">
                                        <img src="images/gaixinh.jpg" alt="" width={30} height={30} />
                                        <span>Nguyễn Văn Phước</span>
                                    </List.Item>
                                    <List className="box-option-sider-left" >
                                        <Link to="/">
                                            <List.Item className="active">
                                                <GrArticle /> Trang chủ
                                            </List.Item>
                                        </Link>
                                        <Link to="messenger">
                                            <List.Item>
                                                <FaFacebookMessenger /> Messenger
                                            </List.Item>
                                        </Link>
                                        <Link to="watch">
                                            <List.Item>
                                                <FiYoutube /> Watch
                                            </List.Item>
                                        </Link>
                                    </List>
                                </List>
                                <Divider orientation="middle">Lối tắt</Divider>
                                <List className="box-option-sider-left" >
                                    <Link to="your_pages">
                                        <List.Item className="active">
                                            List Page
                                            </List.Item>
                                    </Link>
                                    <Link to="your_groups">
                                        <List.Item>
                                            List Group
                                            </List.Item>
                                    </Link>
                                </List>
                                <Divider orientation="middle">Khám phá</Divider>
                                <List className="box-option-sider-left" >
                                    <Link to="page">
                                        <List.Item className="active">
                                            <AiFillFlag /> Trang
                                            </List.Item>
                                    </Link>
                                    <Link to="group">
                                        <List.Item>
                                            <GrGroup /> Nhóm
                                            </List.Item>
                                    </Link>
                                    <Link to="friend_list">
                                        <List.Item>
                                            <FaUserFriends /> Danh sách bạn bè
                                            </List.Item>
                                    </Link>
                                </List>
                            </div>
                        </Sider>
                        <NewFeed />
                        <Sider width="350" >
                            <div style={{ position: "fixed" }}>
                                <div className="language-app">
                                </div>
                                <div className="box-footer">
                                    <ul>
                                        <li><GoPrimitiveDot />
                                            <Link to="privacy">Quyền riêng tư</Link>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <Link to="rules-mohi">Điều khoản</Link>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <Link to="privacy-policy">Chính sách bảo mật</Link>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <Link to="help">Trợ giúp</Link>
                                        </li>
                                    </ul>
                                    <div className="brand-app">Mohi &copy; {yearNow}</div>
                                </div>
                            </div>
                        </Sider>
                    </Layout>
                </div>
            </Content>
        </>
    )
}

export default Main;