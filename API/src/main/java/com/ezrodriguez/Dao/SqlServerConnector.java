/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ezrodriguez.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author LuisJavier
 */
public class SqlServerConnector {

    private final static String connectionString = "jdbc:sqlserver://localhost\\SQL2008R2;databaseName=ProductManager;integratedSecurity=false;";

    public static Connection getConnection() {
        try {

            Connection cnn = DriverManager.getConnection(connectionString, "sa", "sa1234");
            return cnn;
        } catch (SQLException ex) {
            return null;
        }

    }
}
