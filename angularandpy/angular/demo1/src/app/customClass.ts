import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
    // translate: TranslateService;
    itemsPerPageLabel = 'Entries per page';
    // firstPageLabel = 'First';
    // lastPageLabel = 'Last';
    // nextPageLabel = 'Next';
    // previousPageLabel = 'Previous';
    // constructor(private translate: TranslateService) {
    //     super();
    //     this.getPaginatorIntl();
    // }
    // getPaginatorIntl() {
    //     // tslint:disable-next-line:max-line-length
    //     this.translate.get(['PAGINATOR.ITEMS_PER_PAGE_LABEL', 'PAGINATOR.NEXT_PAGE_LABEL', 'PAGINATOR.PREVIOUS_PAGE_LABEL', 'PAGINATOR.FIRST_PAGE_LABEL', 'PAGINATOR.LAST_PAGE_LABEL']).subscribe(translation => {
    //         this.itemsPerPageLabel = translation['PAGINATOR.ITEMS_PER_PAGE_LABEL'];
    //         this.nextPageLabel = translation['PAGINATOR.NEXT_PAGE_LABEL'];
    //         this.previousPageLabel = translation['PAGINATOR.PREVIOUS_PAGE_LABEL'];
    //         this.firstPageLabel = translation['PAGINATOR.FIRST_PAGE_LABEL'];
    //         this.lastPageLabel = translation['PAGINATOR.LAST_PAGE_LABEL'];
    //         this.changes.next();
    //     });
    // }
    getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return '0 of ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' of ' + length;
    };
    // injectTranslateService(translate: TranslateService) {
    //     this.translate = translate;
    //     this.translate.onLangChange.subscribe(() => {
    //       this.translateLabels();
    //     });
    //     this.translateLabels();
    //   }
    //   translateLabels() {
    //     this.firstPageLabel = this.translate.instant('mat-paginator-intl.first_page');
    //     this.itemsPerPageLabel = this.translate.instant('mat-paginator-intl.items_per_page');
    //     this.lastPageLabel = this.translate.instant('mat-paginator-intl.last_page');
    //     this.nextPageLabel = this.translate.instant('mat-paginator-intl.next_page');
    //     this.previousPageLabel = this.translate.instant('mat-paginator-intl.previous_page');
    //   }
}
