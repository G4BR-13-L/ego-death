fn main(){
    let msg: &'static str = "C";
    encriptar(msg);
}

fn encriptar(message: &str){
    let char_vec: Vec<char> = message.chars().collect();
    for c in char_vec {
        println!("{}", c);
    }
}