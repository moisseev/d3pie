define([], function() {
	"use strict";

	var _COLORSETS = {

		// 10 items
		small: [
			{ label: "Grays", colors: ["#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#afafaf", "#bcbcbc", "#d8d8d8"] },
			{ label: "Blues", colors: ["#00047c", "#2f3399", "#2f52aa", "#2e59c9", "#4d70cc", "#738eef", "#77a0dd", "#9db5f2", "#bccff2", "#d7e5f7"] },
			{ label: "Greens", colors: ["#043a00", "#104904", "#155d07", "#217f0e", "#2ea217", "#41cb29", "#58ea3e", "#9ff990", "#bbfdb0", "#d3fdcb"] },
			{ label: "Palette 1 - bold", colors: ["#0066cc", "#003366", "#336600", "#669966", "#990000", "#cc6600", "#66cc33", "#cc6699", "#ffff33", "#9933ff" ] },
			{ label: "Palette 2 - pastels", colors: ["#ccb2b2", "#ccc8b2", "#c4ccb2", "#b6ccb2", "#b2ccbc", "#b2ccc9", "#b2c3cc", "#b2b8cc", "#b7b2cc", "#c3b2cc" ] },
			{ label: "Palette 3 - medium colors ", colors: ["#7e3939", "#7e6539", "#7c7e39", "#597e39", "#397e46", "#397e6a", "#396a7e", "#39517e", "#4e397e", "#7a397e" ] },
			{ label: "Palette 4 - darker colors", colors: ["#4e3a3a", "#4a4e3a", "#414e3a", "#3a4e43", "#3a4c4e", "#3a3f4e", "#3c3a4e", "#443a4e", "#4e3a4d", "#4e3a42" ] }
		],

		// 20 items
		medium: [
			{
				label: "Grays",
				colors: [
					"#0d0d0d", "#1c1c1c", "#292929", "#363636", "#3e3e3e", "#454545", "#4c4c4c", "#525252", "#575757", "#606060",
					"#6e6e6e", "#777777", "#818181", "#8d8d8d", "#999999", "#a3a3a3", "#afafaf", "#b8b8b8", "#c1c1c1", "#cccccc"
				]
			},
			{
				label: "Blues",
				colors: [
					"#000924", "#010d2f", "#021345", "#031a5d", "#042174", "#052480", "#082d97", "#0a32a3", "#1341c3", "#1746ce",
					"#2354e2", "#275aea", "#386af9", "#4473fb", "#5b84fa", "#678efb", "#81a1fa", "#90abfb", "#b2c6ff", "#d4dffd"
				]
			},
			{
				label: "Greens",
				colors: [
					"#062600", "#093201", "#0b3c02", "#0e4603", "#104904", "#155d07", "#1b6f0a", "#217f0e", "#279212", "#2ea217",
					"#36b520", "#41cb29", "#4cdc33", "#58ea3e", "#73fa5b", "#89f876", "#9ff990", "#bbfdb0", "#d3fdcb", "#dfffdc"
				]
			},
			{
				label: "Reds",
				colors: [
					"#3b0400", "#470601", "#5c0802", "#670902", "#7a0c03", "#840e05", "#991107", "#a51308", "#b6160a", "#bf180b",
					"#cb1b0e", "#e22214", "#ed2617", "#fe4133", "#fd5143", "#fe7167", "#fd958d", "#fca099", "#fcbfbb", "#fdceca"
				]
			},
			{
				label: "Palette 1 - bold",
				colors: [
					"#f30000", "#0600f3", "#01b109", "#67f200", "#ff7e00", "#8fe5fa", "#ff5400", "#3955d1", "#d10fd8", "#7891ff",
					"#02664d", "#e9f118", "#7de8cb",  "#9b8cf6", "#79aff9", "#bfbfbf", "#56b511", "#ff4242", "#61ff42", "#4277ff"
				]
			},
			{
				label: "Palette 2 - pastels",
				colors: [
					"#ccb2b2", "#ccb9b2", "#ccc2b2", "#cccbb2", "#c7ccb2", "#bfccb2", "#b7ccb2", "#b2ccb7", "#b2ccbe", "#b2ccc6",
					"#b2cacc", "#b2c4cc", "#b2bbcc", "#b2b4cc", "#b8b2cc", "#beb2cc", "#c6b2cc", "#ccb2cb", "#ccb2c3", "#ccb2bd"
				]
			},
			{
				label: "Palette 3 - medium colors",
				colors: [
					"#7e3939", "#7e5139", "#7e6839", "#787e39", "#607e39", "#4c7e39", "#397e43", "#397e5d", "#397e73", "#396d7e",
					"#395d7e", "#394b7e", "#394b7e", "#46397e", "#55397e", "#63397e", "#77397e", "#7e3972", "#7e3960", "#7e394b"
				]
			},
			{
				label: "Palette 4 - darker colors",
				colors: [
					"#4e3a3a", "#4e3f3a", "#4e463a", "#4e4d3a", "#494e3a", "#454e3c", "#3f4e3c", "#3c4e3d", "#3c4e44", "#3c4e4a",
					"#3c4d4e", "#3c474e", "#3c414e", "#3d3c4e", "#423c4e", "#473c4e", "#4d3c4e", "#4e3c4a", "#4e3c45", "#4e3c41"
				]
			}
		],

		// 30 items
		large: [
			{
				label: "Grays",
				colors: [
					"#0d0d0d", "#1b1b1b", "#212121", "#282828", "#343434", "#3c3c3c", "#434444", "#4a4a4a", "#525353", "#5b5c5c",
					"#636363", "#6a6a6a", "#717171", "#787878", "#7e7e7e", "#838383", "#8b8b8b", "#969696", "#9b9b9b", "#a0a0a0",
					"#a6a6a6", "#acacac","#b4b4b4", "#bababa", "#c0c0c0", "#c9c9c9", "#d1d1d1", "#d7d7d7", "#dfdfdf", "#e9e9e9"
				]
			},
			{
				label: "Blues",
				colors: [
					"#000924", "#010d2f", "#01103a", "#021345", "#031a5d", "#031d68", "#042174", "#052480", "#06298c", "#082d97",
					"#0a32a3", "#0d39b8", "#1341c3", "#1746ce", "#1b4cd8", "#2354e2", "#275aea", "#2f62f2", "#386af9", "#4473fb",
					"#507cfb", "#5b84fa", "#678efb", "#7598fb", "#81a1fa", "#90abfb", "#9eb6fc", "#b2c6ff", "#c2d1fc", "#d4dffd"
				]
			},
			{
				label: "Reds",
				colors: [
					"#3b0400", "#470601", "#510701", "#5c0802", "#670902", "#710b03", "#7a0c03", "#840e05", "#8f1006", "#991107",
					"#a51308", "#ae1509", "#b6160a", "#bf180b", "#cb1b0e", "#d41d0f", "#e22214", "#ed2617", "#f82f20", "#fe4133",
					"#fd5143", "#fd6155", "#fe7167", "#fd847b", "#fd958d", "#fca099", "#fdb0aa", "#fcbfbb", "#fdceca", "#fde1df"
				]
			},
			{
				label: "Greens",
				colors: [
					"#032c00", "#043500", "#053d01", "#054200", "#064b01", "#085502", "#085d01", "#076100", "#076900", "#0a7002",
					"#0b7603", "#0d7c04", "#0f8006", "#108607", "#128b09", "#14910b", "#18980e", "#1b9d11", "#1fa314", "#21a917",
					"#25b11a", "#2aba1f", "#2fc124", "#37c92c", "#3dcf32", "#47d23d", "#52d748", "#63de5a", "#71e169", "#81e679"
				]
			},
			{
				label: "Palette 1 - bold",
				colors: [
					"#f30000", "#0600f3", "#01b109", "#14e4b5", "#0fe8fb", "#67f200", "#ff7e00", "#8fe5fa", "#ff5400", "#640000",
					"#3955d1", "#d10fd8", "#7891ff", "#02664d", "#04231b", "#e9f118", "#f3228e", "#7de8cb", "#ff5400", "#ff5400",
					"#7fff31", "#9b8cf6", "#79aff9", "#bfbfbf", "#56b511", "#00e2f6", "#ff4242", "#61ff42", "#4277ff", "#ffa842"
				]
			},
			{
				label: "Palette 2 - pastels",
				colors: [
					"#f5c2c2", "#f5c2cc", "#f5c2d4", "#f5c2df", "#f5c2e7", "#f5c2f3", "#eec2f5", "#e7c2f5", "#dcc2f5", "#d5c2f5",
					"#cac2f5", "#c2c2f5", "#c2cdf5", "#c2d8f5", "#c2e4f5", "#c2edf5", "#c2f5f2", "#c2f5e8", "#c2f5e0", "#c2f5d4",
					"#c2f5ca", "#c2f5ca", "#d0f5c2", "#daf5c2", "#e5f5c2", "#eef5c2", "#f5f4c2", "#f5e8c2", "#f5dec2", "#f5d3c2"
				]
			},
			{
				label: "Palette 3 - medium colors",
				colors: [
 					"#7e3939", "#7e4b39", "#7e5939", "#7e6539", "#7e7239", "#7c7e39", "#707e39", "#637e39", "#537e39", "#487e39",
					"#3e7e39", "#397e41", "#397e50", "#397e5d", "#397e6a", "#397e77", "#39757e", "#39667e", "#39567e", "#394b7e",
					"#393c7e", "#43397e", "#51397e", "#62397e", "#6f397e", "#7c397e", "#7e3977", "#7e3965", "#7e3958", "#7e3946"
				]
			},
			{
				label: "Palette 4 - darker colors",
				colors: [
					"#4e3a3a", "#4e3d3a", "#4e413a", "#4e443a", "#4e483a", "#4e4d3a", "#4b4e3a", "#484e3a", "#434e3a", "#404e3a",
					"#3b4e3a", "#3a4e3d", "#3a4e40", "#3a4e44", "#3a4e48", "#3a4e48", "#3a4d4e", "#3a454e", "#3a424e", "#3a3e4e",
					"#3c3a4e", "#403a4e", "#433a4e", "#473a4e", "#4a3a4e", "#4d3a4e", "#4e3a4b", "#4e3a48", "#4e3a43", "#4e3a40"
				]
			}
		]
	};

	return _COLORSETS;
});