/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : eggrbac

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2019-05-28 14:47:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限id',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `type` int(255) DEFAULT NULL COMMENT '节点类型,1:表示模块 2:表示菜单3:操作',
  `url` varchar(255) DEFAULT NULL COMMENT '连接地址',
  `status` int(1) DEFAULT '1' COMMENT '0:不可用,1:可用',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更改时间',
  `permission_id` int(11) DEFAULT NULL COMMENT '当前表id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COMMENT='权限';

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES ('11', '角色管理', '1', '', '1', '2019-03-19 16:59:20', '2019-03-19 16:59:20', '0');
INSERT INTO `permission` VALUES ('12', '角色列表', '2', '/admin/role', '1', '2019-03-19 16:59:57', '2019-03-19 16:59:57', '11');
INSERT INTO `permission` VALUES ('13', '增加角色', '2', '/admin/role/add', '1', '2019-03-19 17:00:35', '2019-03-19 17:00:35', '11');
INSERT INTO `permission` VALUES ('14', '用户管理', '1', '', '1', '2019-03-19 17:04:35', '2019-03-19 17:04:35', '0');
INSERT INTO `permission` VALUES ('15', '用户列表', '2', '/admin/user', '1', '2019-03-19 17:04:53', '2019-03-19 17:04:53', '14');
INSERT INTO `permission` VALUES ('16', '用户增加', '2', '/admin/user/add', '1', '2019-03-19 17:05:15', '2019-03-19 17:05:15', '14');
INSERT INTO `permission` VALUES ('17', '权限管理', '1', '', '1', '2019-03-20 16:34:25', '2019-03-20 16:34:25', '0');
INSERT INTO `permission` VALUES ('18', '权限列表', '2', '/admin/permission', '1', '2019-03-20 16:34:55', '2019-03-20 16:34:55', '17');
INSERT INTO `permission` VALUES ('19', '权限增加', '2', '/admin/permission/add', '1', '2019-03-20 16:35:24', '2019-03-20 16:35:24', '17');
INSERT INTO `permission` VALUES ('20', '权限编辑', '3', '/admin/permission/edit', '1', '2019-03-20 16:37:11', '2019-03-20 16:37:11', '17');
INSERT INTO `permission` VALUES ('21', '权限删除', '3', '/admin/permission/delete', '1', '2019-03-20 16:38:02', '2019-03-20 16:38:02', '17');
INSERT INTO `permission` VALUES ('22', '用户编辑', '3', '/admin/user/edit', '1', '2019-03-20 16:45:41', '2019-03-20 16:45:41', '14');
INSERT INTO `permission` VALUES ('23', '用户删除', '3', '/admin/user/delete', '1', '2019-03-20 16:46:14', '2019-03-20 16:46:14', '14');
INSERT INTO `permission` VALUES ('24', '角色编辑', '3', '/admin/role/edit', '1', '2019-03-20 16:46:51', '2019-03-20 16:48:23', '11');
INSERT INTO `permission` VALUES ('25', '角色删除', '3', '/admin/role/delete', '1', '2019-03-20 16:48:53', '2019-03-20 16:48:53', '11');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(255) DEFAULT NULL COMMENT '标题',
  `status` int(1) DEFAULT '1' COMMENT '0:不可用,1:可用',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='角色';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', '1', '2019-02-26 15:36:26', '2019-03-01 14:33:37');
INSERT INTO `role` VALUES ('5', '校长', '1', '2019-03-19 16:46:42', '2019-03-19 16:46:42');
INSERT INTO `role` VALUES ('6', '老师', '1', '2019-03-19 16:46:53', '2019-03-19 16:46:53');
INSERT INTO `role` VALUES ('7', '学生', '1', '2019-03-19 16:46:58', '2019-03-19 16:46:58');

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色权限id',
  `role_id` int(11) DEFAULT NULL COMMENT '角色id',
  `permission_id` int(11) DEFAULT NULL COMMENT '权限id',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=utf8mb4 COMMENT='角色权限多对多';

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES ('21', '4', '10', '2019-03-13 16:43:49', '2019-03-13 16:43:49');
INSERT INTO `role_permission` VALUES ('22', '4', '8', '2019-03-13 16:43:49', '2019-03-13 16:43:49');
INSERT INTO `role_permission` VALUES ('23', '4', '9', '2019-03-13 16:43:49', '2019-03-13 16:43:49');
INSERT INTO `role_permission` VALUES ('222', '5', '11', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('223', '5', '13', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('224', '5', '24', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('225', '5', '12', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('226', '5', '25', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('227', '5', '14', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('228', '5', '15', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('229', '5', '16', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('230', '5', '22', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('231', '5', '23', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('232', '5', '17', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('233', '5', '18', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('234', '5', '19', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('235', '5', '20', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('236', '5', '21', '2019-03-21 13:39:10', '2019-03-21 13:39:10');
INSERT INTO `role_permission` VALUES ('247', '7', '14', '2019-03-21 13:40:21', '2019-03-21 13:40:21');
INSERT INTO `role_permission` VALUES ('248', '7', '22', '2019-03-21 13:40:21', '2019-03-21 13:40:21');
INSERT INTO `role_permission` VALUES ('249', '7', '15', '2019-03-21 13:40:21', '2019-03-21 13:40:21');
INSERT INTO `role_permission` VALUES ('250', '7', '16', '2019-03-21 13:40:21', '2019-03-21 13:40:21');
INSERT INTO `role_permission` VALUES ('251', '6', '14', '2019-03-21 13:40:33', '2019-03-21 13:40:33');
INSERT INTO `role_permission` VALUES ('252', '6', '15', '2019-03-21 13:40:33', '2019-03-21 13:40:33');
INSERT INTO `role_permission` VALUES ('253', '6', '16', '2019-03-21 13:40:33', '2019-03-21 13:40:33');
INSERT INTO `role_permission` VALUES ('254', '6', '22', '2019-03-21 13:40:33', '2019-03-21 13:40:33');
INSERT INTO `role_permission` VALUES ('255', '6', '23', '2019-03-21 13:40:33', '2019-03-21 13:40:33');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更改时间',
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456', '2019-02-26 15:46:32', '2019-02-26 15:46:34', '1');
INSERT INTO `user` VALUES ('2', '李校长', '123456', '2019-03-20 15:36:51', '2019-03-20 15:37:12', '5');
INSERT INTO `user` VALUES ('3', '李老师', '123456', '2019-03-20 15:37:25', '2019-03-20 15:37:25', '6');
INSERT INTO `user` VALUES ('5', '李学生11', '123456', '2019-03-20 16:50:00', '2019-03-21 13:55:14', '7');
INSERT INTO `user` VALUES ('6', '李学生2', '123456', '2019-03-21 13:41:15', '2019-03-21 13:41:15', '7');
INSERT INTO `user` VALUES ('7', '李学生3', '123456', '2019-03-21 13:59:49', '2019-03-21 13:59:49', '7');
