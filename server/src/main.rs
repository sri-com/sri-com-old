use actix_web::{get, HttpServer, App, Responder }; 
use actix_files::NamedFile;

#[get("/")]
async fn index() -> impl Responder {
    NamedFile::open_async("./../.next/server/pages/index.html").await
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    HttpServer::new(|| {
        App::new()
            .service(index)
    })
    .bind("127.0.0.1:8080")?
    .workers(12)
    .run()
    .await
}
