package com.codeclan.example.FurEver.repositories.owners;

import com.codeclan.example.FurEver.models.Owner;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class OwnerRepositoryImpl implements OwnerRepositoryCustom {

//    @Autowired
//    EntityManager entityManager;
//
//
//    @Transactional
//    public List<Owner> allOwners(){
//        List<Owner> owners = null;
//        Session session = entityManager.unwrap(Session.class);
//
//        try {
//            Criteria cr = session.createCriteria(Owner.class);
//            owners = cr.list();
//        } catch (HibernateException e) {
//            e.printStackTrace();
//        } finally {
//            session.close();
//        }
//
//
//        return owners;
//    }
//
//    @Transactional
//    public List<Owner> getOwnersByLocation(String location){
//        List<Owner> owners = null;
//        Session session = entityManager.unwrap(Session.class);
//
//        try {
//            Criteria cr = session.createCriteria(Owner.class);
//            cr.add(Restrictions.gt("location", location));
//            owners = cr.list();
//        } catch (HibernateException e) {
//            e.printStackTrace();
//        } finally {
//            session.close();
//        }
//
//
//        return owners;
//    }
}


