import { memberList } from "$lib/store/app-stores";
import { localMemberList } from "./dataAPI/api-localstore";

export let memberDB = [];

memberList.subscribe((v) => {
    memberDB = v;
});

export const loadMembers = (file) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        let content = e.target.result;
        let data = [];

        console.log(content);

        let lines = content.split('\n');

        lines.forEach((lineContent, idx) => {
            if (lineContent.trim() !== '') {
                let arr = lineContent.split(' ');
                let name = `n-${idx}`;
                let chineseChar = arr.length === 2 ? arr[1].trim() : lineContent.trim();
                let rarity = arr.length === 2 ? parseInt(arr[0]) : 3;

                if (chineseChar === "邢晨晨" || chineseChar === "饶阳") {
                    for (let i = 0; i < 6; i++) {
                        data.push({ name, chineseChar, rarity });
                    }
                } else if (chineseChar !== "许子卿") {
                    data.push({ name, chineseChar, rarity });
                }
            }
        });

        console.log(data);
        memberDB = data;
        localMemberList.set(data);
        alert("上传成功");
        // 使用更友好的用户界面反馈方式
    };

    reader.onloadend = () => {
        if (reader.readyState === FileReader.DONE) {
            // 文件读取完成后的操作
        }
    };

    reader.readAsText(file, 'UTF-8');
};