/**
 * Created by SkyAo on 16/1/22.
 *
 * Title: dom 节点查找
 *
 * Function: 查找两个节点的最近的一个共同父节点，可以包括节点自身
 *
 * Numbers of Method: 2
 */

var commonParentNode = function(oNode1, oNode2) {
    var node1 = oNode1,
        node2 = oNode2;

    // O(n^2)遍历其父节点全部比较一遍
    // parentNode最终会停留在document节点,对于document节点调用该方法依旧是document
    // 而parentElement最终则会返回null.
    while(node1) {
        while (node2) {
            if (node1 === node2) {
                return node1;
            }
            node2 = node2.parentElement;
        }
        node1 = node1.parentElement;
        node2 = oNode2;
    }
};

var commonParentNode2 = function(oNode1, oNode2) {
    var node1 = oNode1;

    while (node1) {
        if (node1.contains(oNode2)) {   // 检查oNode2是否是node1的子孙节点
            return node1;
        }
        node1 = node1.parentElement;
    }
};