export const FrameworksInfo = [
  {
    name: "React",
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
];
