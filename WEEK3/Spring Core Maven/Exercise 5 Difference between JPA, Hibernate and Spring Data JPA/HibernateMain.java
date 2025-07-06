package com.cognizant.orm_learn.hibernate;



import org.hibernate.Session;
import org.hibernate.Transaction;

import com.cognizant.orm_learn.model.Employee;

public class HibernateMain {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();

            Employee emp = new Employee();
            emp.setId(1);
            emp.setName("John");
            emp.setRole("Developer");

            session.persist(emp);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
