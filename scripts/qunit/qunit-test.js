QUnit.test("Test number values and login", function(assert) {
    assert.expect(3);

    const NRA = nuclearReactorModule;

    assert.equal(NRA.getWidth(300), 60); //TRUE
    assert.equal(NRA.getReactors()[0].id, 1);
    assert.equal(NRA.checkLogin("admin", "admin123"), true);
});