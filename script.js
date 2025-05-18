document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
                {
  "question": "Find the maximum sum subarray (Kadane’s Algorithm).",
  "description": "Tests understanding of dynamic programming and array manipulation.",
  "hint": "Keep track of current sum and reset it when it becomes negative.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MaxSubarray {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currentMax = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            maxSoFar = Math.max(maxSoFar, currentMax);
        }
        return maxSoFar;
    }
}
    </code></pre>
  `
},
{
  "question": "Reverse a linked list.",
  "description": "Tests knowledge of linked list data structure and pointer manipulation.",
  "hint": "Iteratively reverse the links between nodes.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}
    </code></pre>
  `
},
{
  "question": "Check if two strings are anagrams.",
  "description": "Tests string manipulation and frequency counting.",
  "hint": "Count characters in both strings and compare counts.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

public class AnagramCheck {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        int[] counts = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            counts[s1.charAt(i) - 'a']++;
            counts[s2.charAt(i) - 'a']--;
        }
        for (int count : counts) {
            if (count != 0) return false;
        }
        return true;
    }
}
    </code></pre>
  `
},
{
  "question": "Implement Depth-First Search (DFS) for a graph.",
  "description": "Tests knowledge of graph traversal and recursion.",
  "hint": "Use a recursive approach with a visited set.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

public class DFS {
    public static void dfs(Map<Integer, List<Integer>> graph, int start, Set<Integer> visited) {
        if (visited.contains(start)) return;
        visited.add(start);
        System.out.print(start + " ");
        for (int neighbor : graph.getOrDefault(start, new ArrayList<>())) {
            dfs(graph, neighbor, visited);
        }
    }
}
    </code></pre>
  `
},
{
  "question": "Find the intersection of two arrays.",
  "description": "Checks set operations and basic array handling.",
  "hint": "Use HashSets to find common elements.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

public class ArrayIntersection {
    public static int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : nums1) set1.add(num);

        Set<Integer> result = new HashSet<>();
        for (int num : nums2) {
            if (set1.contains(num)) result.add(num);
        }

        int[] output = new int[result.size()];
        int i = 0;
        for (int num : result) output[i++] = num;
        return output;
    }
}
    </code></pre>
  `
},
{
  "question": "Check if a number is a power of two.",
  "description": "Tests bit manipulation and number theory.",
  "hint": "Use bitwise AND with n-1 to check.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}
    </code></pre>
  `
},
{
  "question": "Check if a number is a power of two.",
  "description": "Tests bit manipulation and number theory.",
  "hint": "Use bitwise AND with n-1 to check.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}
    </code></pre>
  `
},
{
  "question": "Move all zeros to the end of an array.",
  "description": "Tests in-place array manipulation.",
  "hint": "Use a pointer to track the next position for a non-zero element.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MoveZeros {
    public static void moveZeroes(int[] nums) {
        int insertPos = 0;
        for (int num : nums) {
            if (num != 0) nums[insertPos++] = num;
        }
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }
}
    </code></pre>
  `
},
{
  "question": "Find the majority element in an array.",
  "description": "Tests use of the Boyer-Moore voting algorithm.",
  "hint": "Track a candidate and adjust count accordingly.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MajorityElement {
    public static int majorityElement(int[] nums) {
        int count = 0, candidate = 0;
        for (int num : nums) {
            if (count == 0) candidate = num;
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
}
    </code></pre>
  `
},
{
  "question": "Rotate an array to the right by k steps.",
  "description": "Tests understanding of array manipulation and modular arithmetic.",
  "hint": "Reverse parts of the array to achieve rotation in-place.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class RotateArray {
    public static void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start++] = nums[end];
            nums[end--] = temp;
        }
    }
}
    </code></pre>
  `
},
{
  "question": "Implement a Min Stack.",
  "description": "Tests ability to design a custom stack with additional operations.",
  "hint": "Maintain an auxiliary stack to track the minimum values.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

class MinStack {
    Stack<Integer> stack = new Stack<>();
    Stack<Integer> minStack = new Stack<>();

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {
        if (stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }
        stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}
    </code></pre>
  `
},
{
  "question": "Find the missing number in an array.",
  "description": "Covers arithmetic sum formula and XOR technique.",
  "hint": "Use sum of first n natural numbers or XOR of indices and elements.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MissingNumber {
    public static int findMissingNumber(int[] nums) {
        int total = nums.length * (nums.length + 1) / 2;
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return total - sum;
    }
}
    </code></pre>
  `
},
{
  "question": "Check if two strings are anagrams.",
  "description": "Tests string manipulation and character frequency counting.",
  "hint": "Use a character count array or hashmap to compare frequency.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

public class AnagramCheck {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (char c : t.toCharArray()) {
            if (--count[c - 'a'] < 0) return false;
        }
        return true;
    }
}
    </code></pre>
  `
},
{
  "question": "Find the longest palindrome in a string.",
  "description": "Tests dynamic programming and two-pointer technique.",
  "hint": "Expand around each center to check for palindromes.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class LongestPalindrome {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";

        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandFromCenter(s, i, i);
            int len2 = expandFromCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }

    private static int expandFromCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}
    </code></pre>
  `
},
{
  "question": "Find the intersection of two arrays.",
  "description": "Tests use of sets and array traversal.",
  "hint": "Use HashSet to find common elements.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

public class ArrayIntersection {
    public static int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : nums1) set1.add(num);
        Set<Integer> result = new HashSet<>();
        for (int num : nums2) {
            if (set1.contains(num)) result.add(num);
        }
        return result.stream().mapToInt(i -> i).toArray();
    }
}
    </code></pre>
  `
},
{
  "question": "Check if a linked list has a cycle.",
  "description": "Common use of Floyd’s Cycle Detection Algorithm.",
  "hint": "Use slow and fast pointers.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class LinkedListCycle {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;

        ListNode slow = head;
        ListNode fast = head.next;

        while (slow != fast) {
            if (fast == null || fast.next == null) return false;
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
}
    </code></pre>
  `
},
{
  "question": "Merge two sorted arrays.",
  "description": "Tests basic array manipulation and merge logic.",
  "hint": "Use two pointers starting from the ends.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;

        while (i >= 0 && j >= 0) {
            nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        }

        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }
}
    </code></pre>
  `
},
{
  "question": "Implement a Queue using Stacks.",
  "description": "Tests data structure transformation logic.",
  "hint": "Use two stacks to simulate queue behavior.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
import java.util.*;

class MyQueue {
    Stack<Integer> in = new Stack<>();
    Stack<Integer> out = new Stack<>();

    public void push(int x) {
        in.push(x);
    }

    public int pop() {
        peek();
        return out.pop();
    }

    public int peek() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) out.push(in.pop());
        }
        return out.peek();
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}
    </code></pre>
  `
},
{
  "question": "Check if a number is a power of two.",
  "description": "Tests bit manipulation.",
  "hint": "A power of two has only one bit set in binary.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}
    </code></pre>
  `
},
{
  "question": "Reverse words in a string.",
  "description": "Tests string manipulation and trimming techniques.",
  "hint": "Split, trim, reverse the array and join.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class ReverseWords {
    public String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]).append(" ");
        }
        return sb.toString().trim();
    }
}
    </code></pre>
  `
},
{
  "question": "Implement strstr() function.",
  "description": "Find the first occurrence of a substring.",
  "hint": "Use substring and index checks.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class StrStr {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        return haystack.indexOf(needle);
    }
}
    </code></pre>
  `
},
{
  "question": "Find majority element in array.",
  "description": "Tests knowledge of voting algorithm or hashmap.",
  "hint": "Use Boyer-Moore Voting Algorithm.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class MajorityElement {
    public int majorityElement(int[] nums) {
        int count = 0, candidate = 0;
        for (int num : nums) {
            if (count == 0) candidate = num;
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
}
    </code></pre>
  `
},
{
  "question": "Count number of 1s in binary representation.",
  "description": "Basic bit manipulation problem.",
  "hint": "Use n & (n - 1) trick to remove the last set bit.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
public class CountBits {
    public int hammingWeight(int n) {
        int count = 0;
        while (n != 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }
}
    </code></pre>
  `
},
{
  "question": "Merge two binary trees.",
  "description": "Tree recursion and traversal logic.",
  "hint": "Combine values node-wise recursively.",
  "answer": `
    <p><strong>Sample Answer (Java):</strong></p>
    <pre><code class="language-java">
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class MergeTrees {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if (t1 == null) return t2;
        if (t2 == null) return t1;

        t1.val += t2.val;
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
        return t1;
    }
}
    </code></pre>
  `
},
{
  "question": "Tell me about a time when you had to adapt to a major change in a project.",
  "description": "Assesses adaptability and flexibility.",
  "hint": "Use the STAR method—describe the Situation, Task, Action, and Result.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>In my internship project, halfway through the development, the client's requirements changed significantly. I quickly organized a meeting with the team to re-evaluate our approach. We adjusted our timeline, redefined user stories, and successfully delivered a product that met the new requirements. It taught me the importance of staying adaptable and communicating well under pressure.</p>
  `
},
{
  "question": "Describe a situation where you disagreed with a team member. How did you handle it?",
  "description": "Evaluates teamwork and conflict resolution.",
  "hint": "Show your ability to listen, compromise, and maintain professionalism.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>During a group assignment, a teammate and I had differing views on how to implement a module. I initiated a one-on-one conversation to understand their perspective. We then proposed both solutions to the mentor, who helped us blend the best of both. This taught me the value of healthy dialogue and collaboration.</p>
  `
},
{
  "question": "How do you stay motivated during repetitive or tedious tasks?",
  "description": "Tests motivation and discipline.",
  "hint": "Highlight internal motivation and strategies to maintain productivity.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>I break down the task into smaller milestones and reward myself upon completing each. I also remind myself of the bigger goal it contributes to. Listening to instrumental music sometimes helps me stay focused during such tasks.</p>
  `
},
{
  "question": "How do you prioritize tasks when you're working on multiple projects?",
  "description": "Assesses time management and decision-making skills.",
  "hint": "Discuss criteria like deadlines, impact, and dependencies.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>I start by listing all tasks and organizing them based on urgency and importance. I use tools like Trello to track progress. If conflicts arise, I communicate with stakeholders to align on expectations and timelines.</p>
  `
},
{
  "question": "Why do you want to join HP, and where do you see yourself in 5 years?",
  "description": "Checks cultural fit and career goals.",
  "hint": "Align your goals with the company’s values and vision.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>HP’s focus on innovation, sustainability, and inclusive culture aligns with my personal values. In five years, I see myself as a lead developer, having contributed to key product features and mentoring new team members within HP.</p>
  `
},
{
  "question": "Can you describe a time when you took initiative without being asked?",
  "description": "Assesses proactiveness and leadership potential.",
  "hint": "Pick an example where you identified a need and acted on it.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>During my college project, I noticed our team lacked documentation which was causing confusion. Without being prompted, I created a shared online doc outlining progress, tasks, and deadlines. This helped improve our coordination and the project was completed ahead of time.</p>
  `
},
{
  "question": "How do you deal with failure or setbacks?",
  "description": "Evaluates resilience and growth mindset.",
  "hint": "Demonstrate your ability to learn from failure and bounce back.",
  "answer": `
    <p><strong>Sample Answer:</strong></p>
    <p>Once, my code caused a delay in our sprint delivery. Instead of dwelling on the mistake, I analyzed what went wrong, discussed it in the retrospective, and proposed better testing practices. The experience taught me accountability and how to turn setbacks into improvements.</p>
  `
}
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});