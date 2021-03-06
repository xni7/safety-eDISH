export function dropMissingValues() {
    var config = this.config;
    //drop records with missing or invalid (negative) values
    var missing_count = d3.sum(
        this.raw_data,
        f => f[config.x.column] <= 0 || f[config.y.column] <= 0
    );

    this.wrap.select('.se-footnote').remove();
    if (missing_count > 0) {
        this.wrap
            .append('span')
            .classed('se-footnote', true)
            .text(
                'Data not shown for ' +
                    missing_count +
                    ' participant(s) with invalid data. This could be due to negative or 0 lab values or to missing baseline values when viewing mDish.'
            );

        this.raw_data = this.raw_data.filter(
            f => (f[config.x.column] > 0) & (f[config.y.column] > 0)
        );
    }
}
