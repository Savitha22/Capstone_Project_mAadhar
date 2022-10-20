package capstone.repository;

import org.springframework.data.repository.CrudRepository;

import capstone.bean.User;

public interface UserRepo extends CrudRepository<User, Integer>{

}
