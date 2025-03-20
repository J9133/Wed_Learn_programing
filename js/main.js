let lang_txt = 'en';
const array_name = ["html", "cpp", "js"];
const web_lang = document.getElementById('web_lang')

function html_open() {
  window.location.href = "/Wed_Learn_programing/windows/html.html";
}

function js_open() {
  window.location.href = "/Wed_Learn_programing/windows/js.html";
}

function cpp_open() {
  window.location.href = "/Wed_Learn_programing/windows/cpp.html";
}

function p_open() {
  window.location.href = "/Wed_Learn_programing/windows/project.html";
}

async function load_data(I) {
  const url = I;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function lango() {
  if (lang_txt == 'en') {
    lang_txt = 'ar';
    web_lang.innerText = 'تغيير الغة';
  } else {
    lang_txt = 'en';
    web_lang.innerText = 'Change language';
  }
  
  const data = await load_data("../data/data_" + lang_txt + ".json");
  if (data) {
    for (let i = 0; i < array_name.length; i++) {
      const div_txt = document.getElementById(array_name[i]);
      if (div_txt) {
        div_txt.innerHTML = data[array_name[i]].replace(/\n/g, "<br>");
      }
    }
  }
}
async function go_YT(input) {
  const data = await load_data("../data/url.json")
  if (data){
    console.log(data.input)
    console.log(data)
    window.location.href = data[input]
    console.log(9)
  }
}

lango()


