use rocket::{get, routes, launch};
use rocket::fs::NamedFile;
use rocket::form::FromForm;
use std::path::{Path, PathBuf};

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open("./../.next/server/pages/index.html").await.ok()
}

#[get("/<file..>")]
async fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new(&format!("./../.next/{}",file.to_str().unwrap()))).await.ok()
}

#[derive(FromForm)]
struct ImageParams {
    url: Option<String>,
    w: Option<u32>,
    q: Option<u8>,
}

#[get("/image?<image_params..>")]
async fn serve_image(image_params: ImageParams) -> Option<NamedFile> {
    let url = image_params.url.expect("Missing 'url' parameter");
    let w = image_params.w.unwrap_or(640);
    let q = image_params.q.unwrap_or(75);

    println!("{}-{}-{}",&url[2..],w,q);

    // Serve the file as a response.
    NamedFile::open(Path::new(&format!("./../.{}",&url[2..]))).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        .mount("/_next", routes![serve_image])
        .mount("/_next", routes![files])
        .mount("/_next", routes![files])
}
