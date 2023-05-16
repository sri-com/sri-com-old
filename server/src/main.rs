use actix_web::{get, web, Responder, HttpServer, App};
use actix_files::NamedFile;
use actix_web::middleware::Logger;
use env_logger::Env;
use tracing_actix_web::TracingLogger;
use serde::Deserialize;

#[get("/")]
async fn index() -> impl Responder { 
    NamedFile::open_async("../.next/server/pages/index.html").await
}

#[get("/_next/{filename:.*}")]
async fn other_files(filename: web::Path<String>) -> impl Responder { 
    let file_path = format!("../.next/{}",filename.to_string());
    println!("{}",file_path);

    NamedFile::open_async(file_path).await
}

#[derive(Deserialize,Debug)]
struct ImageRequest {
    url: String,
    w: Option<u32>,
    q: Option<u8>,
}

#[get["_next/image"]]
async fn image_req(image_request: web::Query<ImageRequest>) -> impl Responder {

    let image_path = format!("../.next/{}",&image_request.url[7..]);
    NamedFile::open_async(image_path).await
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(index)
            .service(image_req)
            .service(other_files)
    })
    .workers(12)
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
