function validateSysPath2() {
    let element = document.getElementById('sys_path2')
    let regex = new RegExp(`[A-Za-z]:\\(windows|winnt|win|dos|msdos)(\\.*)?`, "i");
    if (element.value.length === 0) {
        element.classList.remove('invalid');
        element.classList.remove('valid');
    } else {
        let isValid = regex.test(element.value);

        if (isValid) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
            element.classList.add('invalid');
        }
    }
}