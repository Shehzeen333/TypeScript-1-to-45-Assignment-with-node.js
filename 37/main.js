function make_shirt(shirt_size, printMessage) {
    if (shirt_size === void 0) { shirt_size = "Large"; }
    if (printMessage === void 0) { printMessage = "I LOVE Typescript"; }
    console.log("creating a ".concat(shirt_size, " shirt with ").concat(printMessage, " print on shirt."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I Love javascript");
