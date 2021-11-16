function remove() {
	document.getElementById("display").value = ""
}

function removeOne() {
	let text = document.getElementById("display")
	text.value = text.value.substring(0, text.value.length - 1)
}

function getValue(value) {
	let text = document.getElementById("display")
	text.value += value
}

function calcu() {
	let text = document.getElementById("display")
	if(escape(text.value).indexOf("%u")<0){ 
		text.value = eval(text.value)
		console.log("没有中文")
	}else{
		console.log("有中文")
	}
}
