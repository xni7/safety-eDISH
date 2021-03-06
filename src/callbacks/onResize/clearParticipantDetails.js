import { clearVisitPath } from './addPointClick/clearVisitPath';
import { clearParticipantHeader } from './addPointClick/clearParticipantHeader';
import { hideMeasureTable } from './addPointClick/hideMeasureTable';
import { clearRugs } from './addPointMouseover/clearRugs';
import { formatPoints } from './formatPoints';

export function clearParticipantDetails() {
    var chart = this;
    var config = this.config;
    var points = this.svg.selectAll('g.point').select('circle');

    points.classed('disabled', false);
    this.config.quadrants.table.wrap.style('display', null);
    clearVisitPath.call(this); //remove path
    clearParticipantHeader.call(this);
    clearRugs.call(this, 'x'); //clear rugs
    clearRugs.call(this, 'y');
    hideMeasureTable.call(this); //remove the detail table
    formatPoints.call(this);
    this.participantDetails.wrap.selectAll('*').style('display', 'none');
}
