export const FrameworksInfo = [
  {
    name: "React.js",
    description: "React adalah pustaka JavaScript untuk membangun antarmuka pengguna. Dibuat oleh Facebook, React digunakan untuk membuat aplikasi web dan mobile dengan pendekatan berbasis komponen.",
    uses: [
      "Membangun UI yang dinamis dan responsif.",
      "Manajemen state dengan React Hooks atau Redux.",
      "Pengembangan aplikasi mobile dengan React Native.",
    ],
    documentationLink: "https://reactjs.org/",
    example: `
      import React from 'react';
  
      const App = () => (
        <div>
          <h1>Hello, React!</h1>
        </div>
      );
  
      export default App;
    `,
  },
  {
    name: "Spring Boot",
    description: "Spring Boot adalah framework untuk Java yang digunakan untuk membangun aplikasi web dan enterprise. Menyediakan konfigurasi otomatis dan pengaturan yang mudah untuk aplikasi Java.",
    uses: [
      "Membangun aplikasi web dengan arsitektur RESTful.",
      "Penggunaan dengan database menggunakan JPA (Java Persistence API).",
      "Integrasi dengan berbagai layanan backend.",
    ],
    documentationLink: "https://spring.io/projects/spring-boot",
    example: `
      @SpringBootApplication
      public class Application {
  
          public static void main(String[] args) {
              SpringApplication.run(Application.class, args);
          }
      }
    `,
  },
  {
    name: "Flask",
    description: "Flask adalah framework minimalis untuk Python yang digunakan untuk membangun aplikasi web dengan mudah dan cepat.",
    uses: [
      "Membangun aplikasi web RESTful.",
      "Menggunakan template Jinja untuk rendering HTML.",
      "Integrasi dengan database menggunakan SQLAlchemy.",
    ],
    documentationLink: "https://flask.palletsprojects.com/",
    example: `
      from flask import Flask
  
      app = Flask(__name__)
  
      @app.route('/')
      def home():
          return 'Hello, Flask!'
  
      if __name__ == '__main__':
          app.run(debug=True)
    `,
  },
  {
    name: "Laravel",
    description: "Laravel adalah framework PHP yang sangat populer untuk membangun aplikasi web yang skalabel dan mudah dikelola.",
    uses: [
      "Membangun aplikasi web menggunakan arsitektur MVC.",
      "Pengelolaan database dengan Eloquent ORM.",
      "Mendukung pembuatan API dengan laravel resources.",
    ],
    documentationLink: "https://laravel.com/",
    example: `
      <?php
  
      Route::get('/', function () {
          return view('welcome');
      });
    `,
  },
  {
    name: "Ruby on Rails",
    description: "Ruby on Rails adalah framework berbasis Ruby yang membantu membangun aplikasi web dengan prinsip-konvensi di atas konfigurasi.",
    uses: [
      "Membangun aplikasi web dengan pola MVC.",
      "Mudah untuk membuat RESTful API.",
      "Integrasi dengan berbagai database dan layanan.",
    ],
    documentationLink: "https://rubyonrails.org/",
    example: `
      class PostsController < ApplicationController
        def index
          @posts = Post.all
        end
      end
    `,
  },
  {
    name: "SwiftUI",
    description: "SwiftUI adalah framework dari Apple untuk membuat antarmuka pengguna pada aplikasi iOS dan macOS menggunakan bahasa Swift.",
    uses: [
      "Membangun antarmuka pengguna secara deklaratif.",
      "Dukungan untuk aplikasi dengan desain responsif.",
      "Integrasi dengan Swift untuk pengembangan lebih cepat.",
    ],
    documentationLink: "https://developer.apple.com/xcode/swiftui/",
    example: `
      struct ContentView: View {
          var body: some View {
              Text("Hello, SwiftUI!")
          }
      }
    `,
  },
  {
    name: "Go Gin",
    description: "Gin adalah framework untuk Go yang digunakan untuk membangun aplikasi web dan RESTful API dengan performa tinggi.",
    uses: [
      "Membangun RESTful API.",
      "Penyederhanaan pengaturan middleware dan routing.",
      "Peningkatan performa aplikasi web.",
    ],
    documentationLink: "https://gin-gonic.com/",
    example: `
      package main
  
      import "github.com/gin-gonic/gin"
  
      func main() {
          r := gin.Default()
          r.GET("/hello", func(c *gin.Context) {
              c.String(200, "Hello, Gin!")
          })
          r.Run(":8080")
      }
    `,
  },
  {
    name: "R Shiny",
    description: "Shiny adalah framework untuk R yang memungkinkan pengembangan aplikasi web interaktif dengan data visualisasi.",
    uses: [
      "Membangun aplikasi web untuk analisis data.",
      "Integrasi dengan R untuk visualisasi dan analisis statistik.",
      "Antarmuka pengguna dinamis dengan slider, grafik, dan input lainnya.",
    ],
    documentationLink: "https://shiny.rstudio.com/",
    example: `
      library(shiny)
      ui <- fluidPage(
        sliderInput("num", "Select a number", min = 1, max = 100, value = 50),
        textOutput("result")
      )
      server <- function(input, output) {
        output$result <- renderText({ paste("Selected number is:", input$num) })
      }
      shinyApp(ui, server)
    `,
  },
  {
    name: "Kotlin Ktor",
    description: "Ktor adalah framework untuk Kotlin yang digunakan untuk membangun aplikasi web dan server-side.",
    uses: [
      "Membangun aplikasi RESTful API.",
      "Mendukung penggunaan middleware dan routing dengan mudah.",
      "Membangun aplikasi dengan performa tinggi.",
    ],
    documentationLink: "https://ktor.io/",
    example: `
      import io.ktor.application.*
      import io.ktor.http.*
      import io.ktor.response.*
      import io.ktor.routing.*
      import io.ktor.server.engine.embeddedServer
      import io.ktor.server.netty.Netty
  
      fun main() {
          embeddedServer(Netty, port = 8080) {
              routing {
                  get("/") {
                      call.respondText("Hello, Ktor!", ContentType.Text.Plain)
                  }
              }
          }.start(wait = true)
      }
    `,
  },
  {
    name: "TypeScript Angular",
    description: "Angular adalah framework TypeScript yang memungkinkan pengembangan aplikasi web berbasis komponen dengan TypeScript.",
    uses: [
      "Membangun aplikasi web berbasis komponen.",
      "Manajemen state dan data binding.",
      "Integrasi dengan backend RESTful API.",
    ],
    documentationLink: "https://angular.io/",
    example: `
      import { Component } from '@angular/core';
  
      @Component({
        selector: 'app-root',
        template: '<h1>Hello, Angular!</h1>',
      })
      export class AppComponent {}
    `,
  },
  {
    name: "Java Hibernate",
    description: "Hibernate adalah framework ORM untuk Java yang mempermudah interaksi dengan database menggunakan objek Java.",
    uses: [
      "Membuat query database menggunakan HQL (Hibernate Query Language).",
      "Mapping objek Java ke tabel database secara otomatis.",
      "Pengurangan boilerplate kode untuk manajemen database.",
    ],
    documentationLink: "https://hibernate.org/",
    example: `
      @Entity
      public class User {
          @Id
          @GeneratedValue
          private Long id;
          private String name;
      }
    `,
  },
  {
    name: "Python Django",
    description: "Django adalah framework Python tingkat tinggi untuk pengembangan aplikasi web cepat dengan desain yang bersih dan pragmatis.",
    uses: [
      "Membangun aplikasi web dengan pola arsitektur MVC.",
      "Mendukung routing, middleware, dan ORM secara bawaan.",
      "Cocok untuk proyek kecil hingga skala besar.",
    ],
    documentationLink: "https://www.djangoproject.com/",
    example: `
      from django.http import HttpResponse

      def index(request):
          return HttpResponse("Hello, Django!")
    `,
  },
  {
    name: "PHP CodeIgniter",
    description: "CodeIgniter adalah framework PHP yang ringan untuk pengembangan aplikasi web dengan performa tinggi.",
    uses: [
      "Membangun aplikasi web dengan arsitektur MVC.",
      "Manajemen database yang mudah menggunakan Active Record.",
      "Pengurangan waktu pengembangan dengan library bawaan.",
    ],
    documentationLink: "https://codeigniter.com/",
    example: `
      <?php
      class Welcome extends CI_Controller {
          public function index() {
              echo "Hello, CodeIgniter!";
          }
      }
    `,
  },
  {
    name: "Ruby Sinatra",
    description: "Sinatra adalah framework Ruby minimalis untuk membangun aplikasi web kecil dan API dengan cepat.",
    uses: [
      "Membangun aplikasi web sederhana.",
      "Cocok untuk aplikasi kecil atau prototipe.",
      "Mudah diintegrasikan dengan database dan layanan lain.",
    ],
    documentationLink: "http://sinatrarb.com/",
    example: `
      require 'sinatra'

      get '/' do
        'Hello, Sinatra!'
      end
    `,
  },
  {
    name: "Swift Vapor",
    description: "Vapor adalah framework web untuk Swift yang digunakan untuk membangun aplikasi server-side dengan performa tinggi.",
    uses: [
      "Membangun aplikasi web dan RESTful API.",
      "Integrasi dengan database menggunakan Fluent ORM.",
      "Mendukung pengembangan server-side aplikasi iOS.",
    ],
    documentationLink: "https://vapor.codes/",
    example: `
      import Vapor

      let app = Application()
      app.get("hello") { req in
          "Hello, Vapor!"
      }
      try app.run()
    `,
  },
  {
    name: "Go Echo",
    description: "Echo adalah framework untuk Go yang mendukung pengembangan aplikasi web dan API dengan fitur-fitur modern.",
    uses: [
      "Membangun aplikasi RESTful API.",
      "Dukungan middleware bawaan seperti autentikasi dan logging.",
      "Performansi tinggi dan ringan.",
    ],
    documentationLink: "https://echo.labstack.com/",
    example: `
      package main

      import "github.com/labstack/echo/v4"

      func main() {
          e := echo.New()
          e.GET("/hello", func(c echo.Context) error {
              return c.String(200, "Hello, Echo!")
          })
          e.Start(":8080")
      }
    `,
  },
  {
    name: "R Plumber",
    description: "Plumber adalah framework untuk R yang mempermudah pembuatan RESTful API dari fungsi R.",
    uses: [
      "Membangun API berbasis data dengan R.",
      "Integrasi langsung dengan fungsi analisis dan visualisasi R.",
      "Cocok untuk aplikasi data science.",
    ],
    documentationLink: "https://www.rplumber.io/",
    example: `
      library(plumber)

      #* @get /hello
      function() {
          list(message = "Hello, Plumber!")
      }
    `,
  },
  {
    name: "TypeScript NestJS",
    description: "NestJS adalah framework TypeScript progresif untuk pengembangan aplikasi backend yang skalabel.",
    uses: [
      "Membangun aplikasi backend berbasis modular.",
      "Integrasi dengan database melalui TypeORM atau Prisma.",
      "Penggunaan dekorator untuk deklarasi logika aplikasi.",
    ],
    documentationLink: "https://nestjs.com/",
    example: `
      import { Controller, Get } from '@nestjs/common';

      @Controller('hello')
      export class AppController {
        @Get()
        getHello(): string {
          return 'Hello, NestJS!';
        }
      }
    `,
  },
  {
    name: "Kotlin Spring WebFlux",
    description: "Spring WebFlux adalah framework untuk Kotlin dan Java yang memungkinkan pengembangan aplikasi reaktif.",
    uses: [
      "Membangun aplikasi reaktif dengan performa tinggi.",
      "Integrasi dengan database reaktif seperti R2DBC.",
      "Cocok untuk aplikasi yang memerlukan skalabilitas tinggi.",
    ],
    documentationLink: "https://spring.io/projects/spring-webflux",
    example: `
      @RestController
      class HelloController {
          @GetMapping("/hello")
          fun sayHello(): Mono<String> {
              return Mono.just("Hello, Spring WebFlux!")
          }
      }
    `,
  },
  {
    name: "Node.js Express",
    description: "Express adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dan API.",
    uses: [
      "Membangun aplikasi RESTful API.",
      "Routing dan middleware yang fleksibel.",
      "Sangat populer untuk pengembangan server-side modern.",
    ],
    documentationLink: "https://expressjs.com/",
    example: `
      const express = require('express');
      const app = express();

      app.get('/hello', (req, res) => {
          res.send('Hello, Express!');
      });

      app.listen(3000, () => {
          console.log('Server is running on port 3000');
      });
    `,
  },
  {
    name: "Java Micronaut",
    description: "Micronaut adalah framework modern untuk Java yang dirancang untuk aplikasi cloud-native dengan startup cepat dan footprint kecil.",
    uses: [
      "Membangun microservices dengan performa tinggi.",
      "Integrasi dengan layanan cloud seperti AWS, GCP, dan Azure.",
      "Dukungan untuk GraalVM untuk startup cepat.",
    ],
    documentationLink: "https://micronaut.io/",
    example: `
      @Controller("/hello")
      public class HelloController {
          @Get("/")
          public String sayHello() {
              return "Hello, Micronaut!";
          }
      }
    `,
  },
  {
    name: "Python FastAPI",
    description: "FastAPI adalah framework modern untuk Python yang digunakan untuk membangun API dengan performa tinggi dan tipe Python yang eksplisit.",
    uses: [
      "Membangun aplikasi RESTful API dengan cepat.",
      "Dukungan untuk validasi data otomatis dengan Pydantic.",
      "Performa tinggi yang setara dengan Node.js dan Go.",
    ],
    documentationLink: "https://fastapi.tiangolo.com/",
    example: `
      from fastapi import FastAPI

      app = FastAPI()

      @app.get("/hello")
      def read_root():
          return {"message": "Hello, FastAPI!"}
    `,
  },
  {
    name: "PHP Symfony",
    description: "Symfony adalah framework PHP yang kuat untuk membangun aplikasi web yang skalabel dan dapat dipelihara.",
    uses: [
      "Membangun aplikasi dengan arsitektur MVC.",
      "Integrasi dengan layanan dan database menggunakan Doctrine ORM.",
      "Pendekatan modular untuk pengembangan aplikasi besar.",
    ],
    documentationLink: "https://symfony.com/",
    example: `
      use Symfony\Component\HttpFoundation\Response;

      public function index(): Response {
          return new Response('Hello, Symfony!');
      }
    `,
  },
  {
    name: "Ruby Hanami",
    description: "Hanami adalah framework Ruby modern yang dirancang untuk aplikasi web ringan dan cepat.",
    uses: [
      "Membangun aplikasi web yang modular.",
      "Dukungan untuk prinsip Clean Architecture.",
      "Integrasi dengan database melalui ROM (Ruby Object Mapper).",
    ],
    documentationLink: "https://hanamirb.org/",
    example: `
      module Web
        module Controllers
          module Home
            class Index
              include Web::Action

              def call(params)
                self.body = "Hello, Hanami!"
              end
            end
          end
        end
      end
    `,
  },
  {
    name: "Swift Kitura",
    description: "Kitura adalah framework server-side Swift yang memungkinkan pengembangan aplikasi web dan API dengan cepat.",
    uses: [
      "Membangun aplikasi server-side dengan Swift.",
      "Integrasi dengan layanan cloud IBM.",
      "Dukungan untuk middleware dan routing.",
    ],
    documentationLink: "https://www.kitura.io/",
    example: `
      import Kitura

      let router = Router()
      router.get("/") {
          request, response, next in
          response.send("Hello, Kitura!")
          next()
      }
      Kitura.addHTTPServer(onPort: 8080, with: router)
      Kitura.run()
    `,
  },
  {
    name: "Go Fiber",
    description: "Fiber adalah framework web untuk Go yang terinspirasi oleh Express.js, menawarkan API yang sederhana dan cepat.",
    uses: [
      "Membangun aplikasi RESTful API.",
      "Performa tinggi dan ringan.",
      "Cocok untuk microservices.",
    ],
    documentationLink: "https://gofiber.io/",
    example: `
      package main

      import "github.com/gofiber/fiber/v2"

      func main() {
          app := fiber.New()
          app.Get("/hello", func(c *fiber.Ctx) error {
              return c.SendString("Hello, Fiber!")
          })
          app.Listen(":8080")
      }
    `,
  },
  {
    name: "R ggplot2",
    description: "ggplot2 adalah library visualisasi data untuk R yang digunakan untuk membuat grafik dengan estetika tinggi.",
    uses: [
      "Membuat grafik statistik yang kompleks.",
      "Mudah diintegrasikan dengan dataset besar.",
      "Cocok untuk analisis data dan presentasi.",
    ],
    documentationLink: "https://ggplot2.tidyverse.org/",
    example: `
      library(ggplot2)

      ggplot(data = mtcars, aes(x = mpg, y = hp)) +
        geom_point() +
        ggtitle("MPG vs Horsepower")
    `,
  },
  {
    name: "TypeScript Deno",
    description: "Deno adalah runtime TypeScript modern yang aman dan cepat, dirancang oleh pembuat Node.js.",
    uses: [
      "Menjalankan TypeScript secara native tanpa transpiler.",
      "Membangun aplikasi CLI atau server-side modern.",
      "Fokus pada keamanan dengan izin eksplisit.",
    ],
    documentationLink: "https://deno.land/",
    example: `
      import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

      serve((req) => new Response("Hello, Deno!"), { port: 8080 });
    `,
  },
  {
    name: "Kotlin Koin",
    description: "Koin adalah library DI (Dependency Injection) untuk Kotlin yang ringan dan mudah digunakan.",
    uses: [
      "Membantu mengelola dependency dalam aplikasi Kotlin.",
      "Digunakan dalam pengembangan aplikasi Android dan server-side.",
      "Pendekatan berbasis DSL untuk konfigurasi.",
    ],
    documentationLink: "https://insert-koin.io/",
    example: `
      import org.koin.dsl.module

      val appModule = module {
          single { HelloService() }
      }

      class HelloService {
          fun sayHello() = "Hello, Koin!"
      }
    `,
  },
  {
    name: "Node.js Koa",
    description: "Koa adalah framework Node.js modern yang dikembangkan oleh tim yang sama dengan Express, menawarkan API yang lebih kecil dan lebih ekspresif.",
    uses: [
      "Membangun aplikasi web dan API modern.",
      "Dukungan async/await yang optimal.",
      "Peningkatan fleksibilitas dibandingkan Express.",
    ],
    documentationLink: "https://koajs.com/",
    example: `
      const Koa = require('koa');
      const app = new Koa();

      app.use(async (ctx) => {
          ctx.body = 'Hello, Koa!';
      });

      app.listen(3000);
    `,
  },
  {
    name: "Vue.js",
    description: "Vue.js adalah framework JavaScript progresif untuk membangun antarmuka pengguna yang interaktif. Mudah dipelajari dan dapat diintegrasikan dengan proyek yang ada.",
    uses: [
      "Membangun antarmuka pengguna dinamis.",
      "Integrasi mudah dengan aplikasi yang sudah ada.",
      "Dukungan untuk komponen, routing, dan manajemen status aplikasi.",
    ],
    documentationLink: "https://vuejs.org/",
    example: `
      <template>
        <div id="app">
          <h1>{{ message }}</h1>
        </div>
      </template>
  
      <script>
      export default {
        data() {
          return {
            message: 'Hello, Vue.js!',
          };
        },
      };
      </script>
  
      <style>
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      </style>
    `,
  },
  {
    name: "jQuery",
    description: "jQuery adalah library JavaScript yang mempermudah manipulasi DOM, penanganan event, animasi, dan AJAX. Dengan jQuery, pengembangan web menjadi lebih cepat dan lebih sederhana.",
    uses: [
      "Manipulasi DOM yang mudah dan cepat.",
      "Penanganan event dengan sintaks yang sederhana.",
      "Membuat animasi dan efek transisi.",
      "Pengelolaan AJAX untuk komunikasi dengan server.",
    ],
    documentationLink: "https://jquery.com/",
    example: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jQuery Example</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </head>
      <body>
        <h1>Click the button to change text</h1>
        <button id="myButton">Change Text</button>
  
        <script>
          $(document).ready(function() {
            $("#myButton").click(function() {
              $("h1").text("Hello, jQuery!");
            });
          });
        </script>
      </body>
      </html>
    `,
  },
  {
    name: "JavaFX",
    description: "JavaFX adalah framework untuk membangun aplikasi desktop berbasis Java dengan antarmuka grafis yang kaya dan interaktif. JavaFX mendukung pengembangan aplikasi dengan elemen UI yang fleksibel dan animasi yang canggih.",
    uses: [
      "Membangun aplikasi desktop dengan antarmuka grafis.",
      "Mendukung penggunaan elemen UI yang kaya dan fleksibel.",
      "Memungkinkan pembuatan animasi dan efek transisi.",
      "Integrasi dengan Java untuk logika aplikasi yang kuat.",
    ],
    documentationLink: "https://openjfx.io/",
    example: `
      import javafx.application.Application;
      import javafx.scene.Scene;
      import javafx.scene.control.Button;
      import javafx.scene.layout.StackPane;
      import javafx.stage.Stage;
  
      public class JavaFXExample extends Application {
  
        @Override
        public void start(Stage primaryStage) {
          Button btn = new Button("Click me");
          btn.setOnAction(e -> btn.setText("Hello, JavaFX!"));
  
          StackPane root = new StackPane();
          root.getChildren().add(btn);
  
          Scene scene = new Scene(root, 300, 250);
  
          primaryStage.setTitle("JavaFX Example");
          primaryStage.setScene(scene);
          primaryStage.show();
        }
  
        public static void main(String[] args) {
          launch(args);
        }
      }
    `,
  },
  {
    name: "STL (Standard Template Library)",
    description: "STL adalah koleksi struktur data dan algoritma yang kuat dalam C++ untuk mempermudah pengembangan aplikasi. STL menyediakan kelas seperti vektor, set, map, dan algoritma untuk pencarian, pengurutan, dan lainnya.",
    uses: [
      "Struktur data seperti vektor, set, map, dan lainnya.",
      "Algoritma pencarian, pengurutan, dan manipulasi data.",
      "Mempermudah pengembangan perangkat lunak dengan koleksi data yang efisien.",
    ],
    documentationLink: "https://en.cppreference.com/w/cpp/algorithm",
    example: `
      #include <iostream>
      #include <vector>
      #include <algorithm>
  
      int main() {
        std::vector<int> vec = {4, 1, 8, 3};
        std::sort(vec.begin(), vec.end());
  
        for (int n : vec) {
          std::cout << n << " ";
        }
        return 0;
      }
    `,
  },
  {
    name: "Qt",
    description: "Qt adalah framework untuk pengembangan aplikasi GUI dengan C++. Qt menyediakan berbagai elemen antarmuka grafis dan alat untuk membangun aplikasi desktop yang kaya dan cross-platform.",
    uses: [
      "Membangun aplikasi desktop dengan antarmuka grafis yang kaya.",
      "Dukungan untuk aplikasi cross-platform (Windows, macOS, Linux).",
      "Integrasi dengan berbagai API dan pustaka eksternal.",
    ],
    documentationLink: "https://doc.qt.io/",
    example: `
      #include <QCoreApplication>
      #include <QDebug>
  
      int main(int argc, char *argv[]) {
        QCoreApplication a(argc, argv);
        qDebug() << "Hello, Qt!";
        return a.exec();
      }
    `,
  },
  {
    name: "Boost",
    description: "Boost adalah pustaka tambahan untuk C++ yang memperluas kemampuan standar C++ dengan menyediakan pustaka untuk manipulasi string, threading, sistem file, dan lainnya.",
    uses: [
      "Memperluas fungsionalitas C++ standar dengan pustaka tambahan.",
      "Menyediakan pustaka untuk thread, manipulasi string, dan operasi sistem file.",
      "Pengembangan aplikasi yang lebih efisien dengan pustaka generik.",
    ],
    documentationLink: "https://www.boost.org/doc/libs/",
    example: `
      #include <boost/algorithm/string.hpp>
      #include <iostream>
      #include <string>
  
      int main() {
        std::string str = "Boost C++ Libraries";
        boost::to_upper(str);
        std::cout << str << std::endl;
        return 0;
      }
    `,
  },
  {
    name: "OpenCV",
    description: "OpenCV adalah pustaka untuk pengolahan gambar dan visi komputer. OpenCV mendukung berbagai operasi seperti pemrosesan gambar, deteksi objek, pengenalan wajah, dan banyak lagi.",
    uses: [
      "Pengolahan gambar dan video.",
      "Deteksi objek dan pengenalan wajah.",
      "Aplikasi visi komputer untuk pengawasan dan analisis visual.",
    ],
    documentationLink: "https://docs.opencv.org/",
    example: `
      #include <opencv2/opencv.hpp>
  
      int main() {
        cv::Mat img = cv::imread("image.jpg");
        if (img.empty()) {
          std::cout << "Could not open or find the image!" << std::endl;
          return -1;
        }
  
        cv::imshow("Image", img);
        cv::waitKey(0);
        return 0;
      }
    `,
  },
  {
    name: ".NET Core",
    description: ".NET Core adalah platform pengembangan open-source dan cross-platform yang digunakan untuk membangun aplikasi web, desktop, dan microservices. .NET Core mendukung pengembangan aplikasi yang dapat dijalankan di Windows, macOS, dan Linux.",
    uses: [
      "Pengembangan aplikasi web dan API.",
      "Membangun aplikasi microservices dan cloud-native.",
      "Aplikasi desktop cross-platform dengan .NET Core.",
    ],
    documentationLink: "https://docs.microsoft.com/en-us/dotnet/core/",
    example: `
      using System;
  
      class Program {
        static void Main() {
          Console.WriteLine("Hello, .NET Core!");
        }
      }
    `,
  },
  {
    name: "Xamarin",
    description: "Xamarin adalah framework cross-platform untuk pengembangan aplikasi mobile menggunakan C#. Xamarin memungkinkan pengembangan aplikasi Android, iOS, dan Windows dengan basis kode yang sama.",
    uses: [
      "Pengembangan aplikasi mobile Android dan iOS menggunakan C#.",
      "Aplikasi mobile dengan basis kode yang dapat digunakan ulang.",
      "Integrasi dengan native APIs di Android dan iOS.",
    ],
    documentationLink: "https://docs.microsoft.com/en-us/xamarin/",
    example: `
      using Xamarin.Forms;
  
      public class App : Application {
        public App() {
          MainPage = new ContentPage {
            Content = new Label {
              Text = "Hello, Xamarin!",
              VerticalOptions = LayoutOptions.CenterAndExpand,
              HorizontalOptions = LayoutOptions.CenterAndExpand,
            },
          };
        }
      }
    `,
  },
  {
    name: "ASP.NET",
    description: "ASP.NET adalah framework pengembangan web yang digunakan untuk membangun aplikasi web dinamis dan API dengan C#. ASP.NET mendukung arsitektur MVC, Web API, dan Blazor untuk aplikasi modern.",
    uses: [
      "Membangun aplikasi web dinamis dan API.",
      "Menyediakan berbagai alat untuk pengembangan web seperti Razor Pages dan Blazor.",
      "Keamanan dan performa tinggi untuk aplikasi web modern.",
    ],
    documentationLink: "https://docs.microsoft.com/en-us/aspnet/core/",
    example: `
      using Microsoft.AspNetCore.Mvc;
  
      public class HelloController : Controller {
        public IActionResult Index() {
          return Content("Hello, ASP.NET!");
        }
      }
    `,
  },
  {
    name: "Entity Framework",
    description: "Entity Framework (EF) adalah ORM (Object-Relational Mapping) untuk .NET yang memungkinkan pengembang untuk berinteraksi dengan database menggunakan objek C#. EF mengurangi kebutuhan untuk menulis SQL manual.",
    uses: [
      "Pengelolaan data dengan ORM untuk aplikasi .NET.",
      "Membuat dan mengelola skema database menggunakan kode.",
      "Mengakses database secara mudah menggunakan LINQ dan query berbasis objek.",
    ],
    documentationLink: "https://docs.microsoft.com/en-us/ef/core/",
    example: `
      using Microsoft.EntityFrameworkCore;
  
      public class ApplicationDbContext : DbContext {
        public DbSet<Customer> Customers { get; set; }
      }
  
      public class Customer {
        public int Id { get; set; }
        public string Name { get; set; }
      }
  
      public class Program {
        public static void Main() {
          var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase("InMemoryDb")
            .Options;
  
          using (var context = new ApplicationDbContext(options)) {
            context.Customers.Add(new Customer { Name = "John Doe" });
            context.SaveChanges();
          }
        }
      }
    `,
  },
  {
    name: "Pandas",
    description: "Pandas adalah pustaka Python yang digunakan untuk manipulasi dan analisis data. Dengan Pandas, pengembang dapat dengan mudah mengelola data dalam format tabel dan melakukan analisis statistik serta pembersihan data.",
    uses: [
      "Manipulasi data dengan struktur DataFrame dan Series.",
      "Pembersihan dan transformasi data.",
      "Analisis data berbasis tabel dengan berbagai fungsi agregasi dan statistik.",
    ],
    documentationLink: "https://pandas.pydata.org/pandas-docs/stable/",
    example: `
      import pandas as pd
  
      # Membaca data dari file CSV
      df = pd.read_csv('data.csv')
  
      # Menampilkan 5 baris pertama
      print(df.head())
  
      # Menambahkan kolom baru
      df['new_column'] = df['existing_column'] * 2
  
      # Melakukan agregasi data
      summary = df.groupby('category_column').agg({'numeric_column': 'sum'})
  
      print(summary)
    `,
  },
  {
    name: "RSpec",
    description: "RSpec adalah framework testing di Ruby yang memungkinkan pengembang untuk menulis spesifikasi (tests) yang dapat dibaca dan dipahami. RSpec memudahkan pengujian kode dengan cara yang sangat ekspresif.",
    uses: [
      "Menulis spesifikasi untuk menguji fungsionalitas aplikasi Ruby.",
      "Mendukung pengujian unit, pengujian integrasi, dan pengujian sistem.",
      "Pengujian berbasis perilaku (BDD) yang memungkinkan penulisan uji dengan cara yang mudah dipahami.",
    ],
    documentationLink: "https://rspec.info/",
    example: `
      # Spec file: spec/calculator_spec.rb
      require 'calculator'
  
      RSpec.describe Calculator do
        it 'adds two numbers' do
          calculator = Calculator.new
          result = calculator.add(2, 3)
          expect(result).to eq(5)
        end
  
        it 'subtracts two numbers' do
          calculator = Calculator.new
          result = calculator.subtract(5, 3)
          expect(result).to eq(2)
        end
      end
    `,
  },
  {
    name: "UIKit",
    description: "UIKit adalah framework utama untuk membangun antarmuka pengguna di iOS. Dengan UIKit, pengembang dapat membuat elemen antarmuka pengguna seperti tombol, tabel, dan navigasi dengan mudah.",
    uses: [
      "Membangun antarmuka pengguna berbasis iOS.",
      "Menyediakan elemen UI seperti tombol, tabel, dan kolom navigasi.",
      "Dukungan untuk animasi, transisi, dan pengelolaan interaksi pengguna.",
    ],
    documentationLink: "https://developer.apple.com/documentation/uikit/",
    example: `
      import UIKit
  
      class ViewController: UIViewController {
          override func viewDidLoad() {
              super.viewDidLoad()
              
              let label = UILabel()
              label.text = "Hello, UIKit!"
              label.frame = CGRect(x: 100, y: 100, width: 200, height: 40)
              self.view.addSubview(label)
          }
      }
    `,
  },
  {
    name: "CoreData",
    description: "CoreData adalah framework Apple yang digunakan untuk pengelolaan data lokal dalam aplikasi iOS. Dengan CoreData, pengembang dapat menyimpan dan mengelola data secara efisien.",
    uses: [
      "Menyimpan dan mengelola data aplikasi menggunakan model objek.",
      "Mendukung pemrosesan data terstruktur dan hubungan antar objek.",
      "Optimisasi pengelolaan data untuk aplikasi iOS dan macOS.",
    ],
    documentationLink: "https://developer.apple.com/documentation/coredata/",
    example: `
      import CoreData
  
      class DataController {
          var persistentContainer: NSPersistentContainer!
  
          func saveContext() {
              let context = persistentContainer.viewContext
              if context.hasChanges {
                  do {
                      try context.save()
                  } catch {
                      let nserror = error as NSError
                      fatalError("Unresolved error \(nserror), \(nserror.userInfo)")
                  }
              }
          }
      }
    `,
  },
  {
    name: "Alamofire",
    description: "Alamofire adalah library Swift untuk melakukan permintaan HTTP dengan mudah. Alamofire menyederhanakan pengelolaan request, response, dan error.",
    uses: [
      "Melakukan permintaan HTTP GET, POST, PUT, DELETE, dll.",
      "Mengelola respons JSON dan XML dengan mudah.",
      "Mengelola error dan status kode HTTP dengan cara yang ekspresif.",
    ],
    documentationLink: "https://github.com/Alamofire/Alamofire",
    example: `
      import Alamofire
  
      AF.request("https://api.example.com/data")
          .responseJSON { response in
              switch response.result {
              case .success(let value):
                  print("Data: \(value)")
              case .failure(let error):
                  print("Error: \(error)")
              }
          }
    `,
  },
  {
    name: "Gorilla",
    description: "Gorilla adalah kumpulan pustaka dan framework untuk pengembangan aplikasi web dengan Go. Dengan Gorilla, pengembang dapat membangun aplikasi web yang lebih modular dan fleksibel.",
    uses: [
      "Membangun aplikasi web dengan pustaka modular dan fleksibel.",
      "Mengelola routing HTTP dengan router yang sangat dapat dikonfigurasi.",
      "Dukungan untuk session, web socket, dan pengelolaan cookie.",
    ],
    documentationLink: "https://www.gorillatoolkit.org/",
    example: `
      package main
  
      import (
          "fmt"
          "net/http"
          "github.com/gorilla/mux"
      )
  
      func HelloHandler(w http.ResponseWriter, r *http.Request) {
          fmt.Fprintf(w, "Hello, Gorilla!")
      }
  
      func main() {
          r := mux.NewRouter()
          r.HandleFunc("/", HelloHandler)
          http.Handle("/", r)
          http.ListenAndServe(":8080", nil)
      }
    `,
  },
  
  {
    name: "Go-Kit",
    description: "Go-Kit adalah toolkit untuk membangun aplikasi mikroservis di Go. Go-Kit menyediakan solusi untuk pengelolaan mikroservis dan arsitektur yang dapat diskalakan.",
    uses: [
      "Membangun aplikasi mikroservis dengan pola desain yang dapat diskalakan.",
      "Menyediakan alat untuk pengelolaan transportasi, penyimpanan data, dan keamanan.",
      "Mendukung pengujian dan integrasi komponen mikroservis dengan mudah.",
    ],
    documentationLink: "https://gokit.io/",
    example: `
      package main
  
      import (
          "context"
          "fmt"
          "github.com/go-kit/kit/log"
          "github.com/go-kit/kit/endpoint"
      )
  
      func HelloEndpoint(ctx context.Context, request interface{}) (interface{}, error) {
          return "Hello, Go-Kit!", nil
      }
  
      func main() {
          logger := log.NewLogfmtLogger(log.NewSyncWriter(os.Stderr))
          helloHandler := endpoint.Endpoint(HelloEndpoint)
  
          fmt.Println("Starting server...")
          // Implement server code to listen for requests
      }
    `,
  },
  
  {
    name: "gRPC",
    description: "gRPC adalah framework untuk komunikasi antar layanan yang efisien dan cepat. Dengan gRPC, pengembang dapat membangun aplikasi dengan komunikasi dua arah berbasis protocol buffers.",
    uses: [
      "Membangun komunikasi antar layanan berbasis protocol buffers.",
      "Pengelolaan komunikasi dua arah dengan efisien.",
      "Mendukung streaming data dan RPC (Remote Procedure Calls) dengan performa tinggi.",
    ],
    documentationLink: "https://grpc.io/",
    example: `
      // Greeter.proto
      syntax = "proto3";
  
      service Greeter {
          rpc SayHello (HelloRequest) returns (HelloResponse);
      }
  
      message HelloRequest {
          string name = 1;
      }
  
      message HelloResponse {
          string message = 1;
      }
  
      // Go code (Server)
      package main
  
      import (
          "context"
          "fmt"
          "google.golang.org/grpc"
          pb "path/to/your/protobuf"
          "log"
          "net"
      )
  
      type server struct{}
  
      func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
          return &pb.HelloResponse{Message: "Hello, " + in.Name}, nil
      }
  
      func main() {
          lis, err := net.Listen("tcp", ":50051")
          if err != nil {
              log.Fatalf("failed to listen: %v", err)
          }
          grpcServer := grpc.NewServer()
          pb.RegisterGreeterServer(grpcServer, &server{})
          if err := grpcServer.Serve(lis); err != nil {
              log.Fatalf("failed to serve: %v", err)
          }
      }
    `,
  },
  {
    name: "dplyr",
    description: "dplyr adalah pustaka R yang digunakan untuk manipulasi data. dplyr menyediakan berbagai fungsi untuk mengubah, memfilter, dan merangkum data dengan cara yang efisien.",
    uses: [
      "Manipulasi data dengan operasi filter, select, arrange, dan mutate.",
      "Pengelolaan data berbasis tabel (data frames).",
      "Menggabungkan data menggunakan operasi join dan agregasi.",
    ],
    documentationLink: "https://dplyr.tidyverse.org/",
    example: `
      library(dplyr)

      # Membaca data
      data <- data.frame(
        name = c("Alice", "Bob", "Carol"),
        age = c(25, 30, 35),
        score = c(90, 80, 85)
      )

      # Menggunakan filter dan select untuk memilih data
      result <- data %>%
        filter(age > 30) %>%
        select(name, score)
      
      print(result)
    `,
},

{
    name: "tidyr",
    description: "tidyr adalah pustaka R yang digunakan untuk transformasi dan pembersihan data. tidyr menyediakan fungsi untuk merapikan data dalam bentuk yang lebih sesuai untuk analisis.",
    uses: [
      "Mengubah data ke dalam format panjang (long) dan lebar (wide).",
      "Melakukan pemisahan dan penggabungan kolom data.",
      "Mengisi nilai yang hilang dengan nilai yang sesuai.",
    ],
    documentationLink: "https://tidyr.tidyverse.org/",
    example: `
      library(tidyr)

      # Membaca data
      data <- data.frame(
        name = c("Alice", "Bob", "Carol"),
        math = c(90, 80, 85),
        english = c(95, 88, 91)
      )

      # Mengubah data ke format panjang
      long_data <- data %>%
        gather(subject, score, math:english)
      
      print(long_data)
    `,
},
{
  name: "Exposed",
  description: "Exposed adalah framework ORM (Object-Relational Mapping) untuk Kotlin yang memungkinkan pengembang untuk bekerja dengan database menggunakan API yang simpel dan intuitif.",
  uses: [
    "Membantu dalam pengelolaan dan manipulasi database menggunakan Kotlin.",
    "Menyediakan sintaks yang mudah untuk query SQL.",
    "Dukungan untuk berbagai database seperti H2, MySQL, dan PostgreSQL.",
  ],
  documentationLink: "https://github.com/JetBrains/Exposed",
  example: `
    import org.jetbrains.exposed.sql.*
    import org.jetbrains.exposed.sql.transactions.transaction
    import org.jetbrains.exposed.dao.IntIdTable
    import org.jetbrains.exposed.sql.SchemaUtils
    import org.jetbrains.exposed.sql.Database

    object Users : IntIdTable() {
        val name = varchar("name", 50)
        val email = varchar("email", 50)
    }

    fun main() {
        val db = Database.connect("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1;", driver = "org.h2.Driver")
        transaction(db) {
            SchemaUtils.create(Users)

            val userId = Users
                .insertAndGetId {
                    it[name] = "John Doe"
                    it[email] = "johndoe@example.com"
                }
            println("Inserted user with ID: $userId")
        }
    }
  `,
},
{
  name: "Anko",
  description: "Anko adalah library Kotlin untuk Android yang menyediakan API sintaksis yang lebih mudah dan lebih produktif untuk membangun UI dan bekerja dengan basis data SQLite.",
  uses: [
    "Membantu membuat UI Android menggunakan sintaks Kotlin yang lebih bersih.",
    "Menyederhanakan penggunaan SQLite dengan API Anko SQLite.",
    "Menyediakan ekstensi untuk pekerjaan umum seperti toast, logging, dan dialog.",
  ],
  documentationLink: "https://github.com/Kotlin/anko",
  example: `
    import org.jetbrains.anko.*
    import android.os.Bundle
    import androidx.appcompat.app.AppCompatActivity

    class MainActivity : AppCompatActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            verticalLayout {
                padding = dip(16)
                button("Click Me") {
                    toast("Hello from Anko!")
                }
            }
        }
    }
  `,
},
{
  name: "Node.js",
  description: "Node.js adalah runtime JavaScript berbasis V8 yang memungkinkan pengembang untuk menjalankan JavaScript di sisi server. Dengan Node.js, pengembang dapat membangun aplikasi web dan server yang efisien dan berskala besar.",
  uses: [
    "Membangun aplikasi web server-side menggunakan JavaScript.",
    "Mengelola komunikasi asinkron menggunakan event-driven architecture.",
    "Menyediakan banyak pustaka untuk mengakses file system, database, dan lebih banyak lagi.",
  ],
  documentationLink: "https://nodejs.org/en/docs/",
  example: `
    const http = require('http');

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, Node.js!\n');
    });

    server.listen(3000, '127.0.0.1', () => {
      console.log('Server running at http://127.0.0.1:3000/');
    });
  `,
}
      
];
