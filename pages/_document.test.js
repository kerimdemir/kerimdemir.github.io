const _document = require("./_document")
// @ponicode
describe("_document.default.getInitialProps", () => {
    test("0", async () => {
        await _document.default.getInitialProps("http://www.croplands.org/account/confirm?t=")
    })

    test("1", async () => {
        await _document.default.getInitialProps("ponicode.com")
    })

    test("2", async () => {
        await _document.default.getInitialProps("https://croplands.org/app/a/reset?token=")
    })

    test("3", async () => {
        await _document.default.getInitialProps("https://twitter.com/path?abc")
    })

    test("4", async () => {
        await _document.default.getInitialProps("https://api.telegram.org/")
    })

    test("5", async () => {
        await _document.default.getInitialProps(undefined)
    })
})
