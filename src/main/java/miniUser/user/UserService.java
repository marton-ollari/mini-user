package miniUser.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public void deleteUserById(int id){
        userRepository.delete(id);
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }
}
