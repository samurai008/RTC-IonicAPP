import { NgModule } from '@angular/core';
import { BusinessListComponent } from './business-list/business-list';
import { MemberCardComponent } from './member-card/member-card';
@NgModule({
	declarations: [BusinessListComponent,
    MemberCardComponent],
	imports: [],
	exports: [BusinessListComponent,
    MemberCardComponent]
})
export class ComponentsModule {}
