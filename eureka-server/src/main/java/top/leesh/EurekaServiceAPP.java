package top.leesh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @author 李书涵
 * @package_name: top.leesh
 * @createdate 2019/8/27 20:00
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaServiceAPP
{
    public static void main(String[] args) throws  Exception
    {
        SpringApplication.run(EurekaServiceAPP.class, args);
    }
}
