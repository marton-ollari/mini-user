package miniUser.user;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/")
    public String mainPage(){
        return "/main";
    }

    @GetMapping(value = "/users")
    @ResponseBody
    public String getAllUser(){
        Gson gson = new Gson();
        List<User> users = userService.getUsers();
        return gson.toJson(users);
    }


    @PostMapping(value = "/save-user")
    @ResponseBody
    public void saveUser(HttpServletRequest request){
        String userName = request.getParameter("name");
        String email = request.getParameter("email");
        userService.saveUser(new User(userName, email));
    }

    @PostMapping(value = "/delete/{id}")
    @ResponseBody
    public void deleteUser(@PathVariable int id){
        userService.deleteUserById(id);
    }

}
