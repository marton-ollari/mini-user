package miniUser.config;

import miniUser.user.User;
import miniUser.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class InitializerBean {
    @Autowired
    private UserRepository userRepository;

    private List<String> users = new ArrayList<String>() {{
    add("Arlinda Aman");
    add("Polly Pinkerton");
    add("Audrea Anderson");
    add("Kacie Kirtley");
    add("Renda Rado");
    add("Mariana Miguez");
    add("Nguyet Naccarato");
    add("Earnestine Eisele");
    add("Hortensia Harshaw");
    add("Nettie Nero");
    add("Tana Tibbetts");
    add("Edris Elsea");
    add("Brandee Budde");
    add("Linh Leaks");
    add("Shu Simeon");
    add("Antonette Almodovar");
    add("Carylon Cannon");
    add("Lai Lipford");
    add("Deloris Dicks");
    add("Opal Ocegueda");
    add("Mathew Mcninch");
    add("Trinidad Tyler");
    add("Miguel Mayville");
    add("Zachariah Zeck");
    add("Trey Trudell");
    add("Darrel Drakes");
    add("Benton Benigno");
    add("Stanley Sheckler");
    add("Fermin Fenn");
    add("Herman Hayslip");
    add("Lamont Lyon");
    add("Sean Sane");
    add("Carmelo Calfee");
    add("Quintin Quarles");
    add("Ian Ivy");
    add("Fidel Felipe");
    add("Demarcus Danziger");
    add("Samual Stansel");
    add("Silas Spurlock");
    add("Neil Nida");
    }};

    @PostConstruct
    public void populateDatabase(){
        for(String name : users){
            userRepository.save(new User(name, name.toLowerCase().replaceAll(" ", ".") + "@kulcssoft.hu"));
        }
    }


}
