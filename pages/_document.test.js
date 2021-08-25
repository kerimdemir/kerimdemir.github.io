const _document = require("./_document")
// @ponicode
describe("_document.default.getInitialProps", () => {
    test("0", async () => {
        await _document.default.getInitialProps("http://www.example.com/route/123?foo=bar")
    })

    test("1", async () => {
        await _document.default.getInitialProps("www.google.com")
    })

    test("2", async () => {
        await _document.default.getInitialProps("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("3", async () => {
        await _document.default.getInitialProps("https://")
    })

    test("4", async () => {
        await _document.default.getInitialProps("https://croplands.org/app/a/confirm?t=")
    })

    test("5", async () => {
        await _document.default.getInitialProps(undefined)
    })
})
